import { NextRequest } from 'next/server';
import { verifyEmail } from '../controllers';

export async function POST(req: NextRequest) {
  const verifyEmailResponse = await verifyEmail(req);

  return verifyEmailResponse;
}
