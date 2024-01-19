import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const tags = req.nextUrl.searchParams.get('query');
  if (!tags) {
    return NextResponse.json('No tags provided');
  }
  const response = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/vvslikescom.wordpress.com/posts?tags=${tags}&_fields=slug,title&per_page=10`
  );
  const results = await response.json();

  console.log({ results })

  return NextResponse.json(results);
};
