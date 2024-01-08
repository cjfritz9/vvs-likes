import { NextRequest, NextResponse } from 'next/server';
import { DirectPost } from '../../services/PaymentsService';

export async function GET(_req: NextRequest) {
  const dp = new DirectPost('');
  dp.test();

  return NextResponse.json('unsupported')
}
