import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query');
  if (!query) {
    return NextResponse.json('No query value provided');
  }
  const response = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/vvslikescom.wordpress.com/posts?search=${query}&_fields=slug,title&per_page=5`
  );

  const results = await response.json();
  return NextResponse.json(results);
};
