import { NextRequest, NextResponse } from 'next/server';
import { Logger } from '../services';

const logger = Logger.getLogger();

export async function checkPassword(req: NextRequest) {
  logger.info({ message: 'checkPassword() triggered' });
  const password = req.nextUrl.searchParams.get('password');
  const isPasswordValid = password === process.env.SHORT_TIMER_PASSWORD;

  if (isPasswordValid) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json({ success: false }, { status: 400 });

}
