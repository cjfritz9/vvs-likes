import { NextRequest } from 'next/server';
import { freeTrial } from '../controllers';

export async function POST(req: NextRequest) {
  const freeTrialResponse = await freeTrial(req);

  return freeTrialResponse;
}
