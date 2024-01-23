import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const response = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/vvslikescom.wordpress.com/posts?slug=${params.slug}&_embed&_fields=slug,excerpt,date,title,content,meta,tags,_links,_embedded`
  );
  const result = await response.json();

  return NextResponse.json(result);
};