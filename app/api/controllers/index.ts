import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { FreeTrialModel } from '../models/FreeTrialModel';
import { MailService, ValidationService, Logger } from '../services';

const logger = Logger.getLogger();
const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

function generateRandomVerificationCode(freeTrialId: string) {
  return (
    Math.random().toString(36).slice(2, 14) + freeTrialId + new Date().getTime()
  );
}

export async function freeTrial(req: NextRequest) {
  const body = (await req.json()) as any;
  const { igu: instagramUsername, email } = body;
  console.log({ instagramUsername, email });
  const metadata = {
    method: 'freetrial',
    body
  };

  logger.info({
    message: 'freetrial() triggered',
    ...metadata
  });

  // Validate presence and format of instagramUsername
  if (!instagramUsername) {
    logger.error({
      error: 'Invalid instagram username',
      ...metadata
    });
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid instagram username',
        message: 'Invalid instagram username'
      },
      { status: 400 }
    );
  }

  // Validate presence and format of email
  if (!email || !emailRegex.test(email)) {
    logger.error({
      error: 'Invalid email',
      ...metadata
    });
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid email',
        message: 'Invalid email'
      },
      { status: 400 }
    );
  }

  let verificationResult;
  try {
    verificationResult = await ValidationService.verification(
      instagramUsername
    );
    console.log(verificationResult)
  } catch (error: any) {
    logger.error({
      message: 'verificationResult() error',
      ...metadata,
      error
    });
    return NextResponse.json({
      success: false,
      error: error && error.message ? error.message : 'error',
      message: 'An error has occurred!'
    });
  }

  if (!verificationResult) {
    logger.error({
      error: 'Error in verificationResult()',
      ...metadata
    });
    return NextResponse.json({ verificationResult }, { status: 500 });
  }

  let ipAddress =
    headers().get('x-forwarded-for') ||
    headers().get('X-Forwarded-For') ||
    '0.0.0.0';

  if (Array.isArray(ipAddress)) {
    ipAddress = ipAddress[0];
  }

  let isFreeTrialAllowed = await ValidationService.isFreeTrialAllowed(
    instagramUsername,
    email
  );

  if (isFreeTrialAllowed) {
    const newFreeTrial = new FreeTrialModel({
      igu: instagramUsername,
      email: email,
      browserip: ipAddress,
      email_confirmation: false,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    });

    await newFreeTrial.save();
    // const newTrial = await FreeTrialModel.create(freeTrialToCreate);

    if (!newFreeTrial) {
      logger.error({
        message: 'Error when creating trial model'
      });

      return NextResponse.json(
        {
          success: false,
          error: 'An error has occurred creating a free trial'
        },
        { status: 500 }
      );
    }

    const { data: postResultData } =
      await ValidationService.fetchInstagramPosts(instagramUsername);
    console.log({ postResultData });

    if (!postResultData) {
      return NextResponse.json(
        {
          success: false,
          error: 'Error fetching posts'
        },
        { status: 500 }
      );
    }

    const instaProfile = postResultData[0];
    const instagramPosts = postResultData[0].feed.data;

    return NextResponse.json(
      {
        success: true,
        userData: newFreeTrial,
        instaProfile,
        instagramPosts
      },
      { status: 200 }
    );
  } else {
    logger.error({
      error: 'You have already used your free trial',
      ...metadata
    });

    return NextResponse.json(
      {
        success: false,
        error: 'You have already used your free trial. Please wait 24 hours.'
      },
      { status: 500 }
    );
  }
}

export async function verifyEmail(req: NextRequest, res: Response) {
  const body = (await req.json()) as any;
  const { verification_code } = body;
  const metadata = {
    method: 'verifyEmail',
    verification_code
  };

  logger.info({
    message: 'verifyEmail() triggered',
    ...metadata
  });

  if (!verification_code) {
    logger.error({
      error: 'Invalid verification code',
      ...metadata
    });
    return NextResponse.json(
      {
        status: false,
        error: 'Invalid verification code',
        message: 'Invalid verification code'
      },
      { status: 400 }
    );
  }

  const freeTrial = await FreeTrialModel.findOne({
    where: { verification_code }
  });

  if (!freeTrial) {
    logger.error({
      error: 'Trial not found',
      ...metadata
    });
    return NextResponse.json(
      { status: false, message: 'Trial not found' },
      { status: 400 }
    );
  }

  if (freeTrial.email_confirmation) {
    logger.error({
      error: 'Email already confirmed. Please wait for 24 hours',
      ...metadata
    });
    return NextResponse.json(
      {
        status: false,
        message: 'Email already confirmed. Please wait 24 hours.'
      },
      { status: 400 }
    );
  }
  const postUrl = 'https://www.instagram.com/p/' + freeTrial.post_id + '/';

  try {
    ValidationService.createSMMRajaOrder({
      action: 'add',
      service: 5504,
      link: postUrl,
      quantity: 10
    });

    ValidationService.createSMMRajaOrder({
      action: 'add',
      service: 7687,
      link: postUrl,
      quantity: 10
    });

    await FreeTrialModel.update(
      {
        email_confirmation: true
      },
      {
        where: {
          id: freeTrial?.id
        }
      }
    );

    return NextResponse.json(
      {
        status: true,
        message: 'Thank you for waiting ...'
      },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    logger.error({
      message: 'Error in postFreeLikesResult or postFreePaidLikesResult',
      ...metadata
    });
    return NextResponse.json(
      {
        status: false,
        message: 'Error when processing free likes. Please try again.'
      },
      { status: 500 }
    );
  }
}

export async function emailVerificaton(req: NextRequest, res: Response) {
  const body = (await req.json()) as any;
  const { post_id, user_id } = body;

  const metadata = {
    method: 'emailVerificaton',
    body: req.body
  };
  logger.info('emailVerificaton() triggered', metadata);

  if (!post_id || !user_id) {
    logger.error({
      error: 'Invalid post id or user id',
      ...metadata
    });
    return NextResponse.json(
      {
        status: false,
        error: 'Invalid post id or user id',
        message: 'Invalid post id or user id'
      },
      { status: 400 }
    );
  }

  try {
    const freeTrial = await FreeTrialModel.findOne({
      where: { id: user_id }
    });

    if (!freeTrial) {
      logger.error('No free trial found', { ...metadata, freeTrial });
      NextResponse.json(
        { status: false, message: 'Invalid user' },
        { status: 400 }
      );
      return;
    }

    const verificationCode = generateRandomVerificationCode(freeTrial.id);
    await FreeTrialModel.update(
      {
        post_id,
        verification_code: verificationCode
      },
      {
        where: {
          id: user_id
        }
      }
    );

    const apiBaseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://vvslikes.com/'
        : 'http://localhost:3000/';

    const emailMessage = `<html><body>Please click <a href="${apiBaseUrl}verifyemail?code=${verificationCode}">here</a> to confirm your email address and receive your 50 free likes!</body></html>`;

    MailService.sendEmail({
      to: freeTrial.email,
      subject: 'VVSLikes - Please verify your email address',
      html: emailMessage
    });

    return NextResponse.json(
      {
        status: true,
        message:
          'Click the link we sent to your email to confirm your email and get up to 50 free likes.'
      },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error('Error in emailVerificaton()', { ...metadata, error });
    return NextResponse.json(
      { status: false, message: error.message },
      { status: 400 }
    );
  }
}
