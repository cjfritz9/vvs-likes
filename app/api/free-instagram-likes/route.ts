import { NextRequest } from 'next/server';
import { freeTrial } from '../controllers';

export async function POST(req: NextRequest) {
  await freeTrial(req);
}