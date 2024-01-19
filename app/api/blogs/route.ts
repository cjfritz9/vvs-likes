import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const response = await fetch(
    'https://public-api.wordpress.com/wp/v2/sites/vvslikescom.wordpress.com/posts?_fields=date,slug,title,excerpt,jetpack_featured_media_url'
  );
  const result = await response.json();

  return NextResponse.json(result);
};
