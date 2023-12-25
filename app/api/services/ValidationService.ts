import { config } from '../config';
import * as queryString from 'querystring';
import * as axiosModule from 'axios';
import { Logger } from '.';
import { FreeTrialModel } from '../models/FreeTrialModel';
import { AxiosResponse } from 'axios';

const logger = Logger.getLogger();
const axios = axiosModule.default;
const { api: smmRajaApi, key: smmRajaKey } = config.smmRaja;

axios.interceptors.request.use(
  (config) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface IVerification {
  error: any;
  error_code: any;
  is_private: boolean;
}

interface ISMMRajaOrder {
  action: string;
  service: number;
  link: string;
  quantity: number;
}

function validateInstagramUsername(instagramUsername: string) {
  logger.info({
    message: 'validateInstagramUsername() triggered',
    instagramUsername
  });

  return axios.get(
    'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/username_validation',
    {
      params: {
        username: instagramUsername
      },
      headers: {
        'X-RapidAPI-Key': config.rapidAPI.key,
        'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
      }
    }
  );
}

function fetchInstagramPosts(instagramUsername: string) {
  logger.info({ message: 'fetchingPosts() triggered', instagramUsername });

  return axios.get(
    'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile',
    {
      params: {
        ig: instagramUsername,
        response_type: 'full',
        corsEnabled: 'true'
      },
      headers: {
        'X-RapidAPI-Key': config.rapidAPI.key,
        'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
      }
    }
  );
}

function createSMMRajaOrder(options: ISMMRajaOrder) {
  if (!smmRajaApi || !smmRajaKey) {
    throw new Error('SMM Raja API or Key is not set');
  }
  logger.info({ message: 'createSMMRajaOrder() triggered', options });

  return axios.post(smmRajaApi, null, {
    params: { key: smmRajaKey, ...options}
  });
}

async function verification(instagramUsername: string): Promise<IVerification> {
  logger.info({ message: 'verification() triggered', instagramUsername });

  try {
    const response: AxiosResponse<IVerification> =
      await validateInstagramUsername(instagramUsername);
    
    console.log({ response })

    if (response && (response.data.error || response.data.error_code)) {
      logger.error({
        error: response.data.error || 'Error when validating Instagram username'
      });
      throw new Error('Invalid instagram username');
    }

    if (response.status !== 200) {
      // TODO - are there other 2xx status code that would be valid?
      logger.error({
        message: 'Error when validating Instagram username',
        response
      });
      throw new Error('Non-200 response from Instagram username validation');
    }

    if (response.data.is_private) {
      logger.error({
        message: 'Instagram profile is private',
        response
      });
      throw new Error('Instagram profile is private');
    }

    return response.data;
    // recaptchaVerification(body['g-recaptcha-response']).then((result) => {
    //     if (result.success) {
    //     } else {
    //         reject('reCAPTCHA verification failed');
    //         return
    //     }
    // })
    // .catch((error) => {
    //     reject('Error verifying reCAPTCHA')
    //     return
    // });
  } catch (error) {
    logger.error({
      message: 'Error when validating Instagram username',
      error
    });
    throw new Error('Invalid instagram username');
  }
}

async function isFreeTrialAllowed(
  instagramUsername: string,
  email: string
): Promise<boolean> {
  logger.info({
    message: 'isFreeTrialAllowed() triggered',
    instagramUsername,
    email
  });

  // Get the most recent, verified trial for this Instagram username
  let existingFreeTrial = await FreeTrialModel.findOne({
    where: { email_confirmation: 1, igu: instagramUsername },
    order: [['createdAt', 'DESC']],
    limit: 1
  });

  let freeTrialCreatedTime = 0;
  if (existingFreeTrial) {
    freeTrialCreatedTime = new Date(
      existingFreeTrial.dataValues.createdAt
    ).getTime();
  }

  // If trial was created in the last 24 hours, don't allow another
  const now = new Date();
  const twentyFourHoursAgo = new Date(now);
  twentyFourHoursAgo.setHours(now.getHours() - 24);

  if (
    freeTrialCreatedTime &&
    freeTrialCreatedTime > twentyFourHoursAgo.getTime()
  ) {
    return false;
  }

  return true;
}

// TODO - currently unused
function recaptchaVerification(body: { 'g-recaptcha-response': string }) {
  return new Promise((resolve, reject) => {
    const requestData = queryString.stringify({
      secret: config.RECAPTCHA_SECRET_KEY,
      response: body['g-recaptcha-response']
    });

    axios
      .get('https://www.google.com/recaptcha/api/siteverify', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: requestData
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
        return;
      });
  });
}

export const ValidationService = {
  validateInstagramUsername,
  recaptchaVerification,
  fetchInstagramPosts,
  createSMMRajaOrder,
  verification,
  isFreeTrialAllowed
};
