import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  let page = req.nextUrl.searchParams.get('page');
  if (!page) {
    page = '1'
  }
  const response = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/vvslikescom.wordpress.com/posts?_embed&_fields=date,slug,title,excerpt,jetpack_featured_media_url,_embedded,_links&per_page=9&page=${page}`
  );
  const totalPages = response.headers.get('X-WP-Totalpages')!;
  const result = await response.json();

  return NextResponse.json({ totalPages, posts: result});
};
