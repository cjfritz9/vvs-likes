import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const token = await req.json();

  if (!token) {
    return NextResponse.json('No Recaptcha token provided');
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    {
      method: 'POST'
    }
  );

  const result = await response.json();

  return NextResponse.json(result);
};
