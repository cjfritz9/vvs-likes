import { NextRequest } from 'next/server';
import { emailVerificaton } from '../controllers';

export async function POST(req: NextRequest) {
  const emailVerificationResponse = await emailVerificaton(req);

  return emailVerificationResponse;
}
