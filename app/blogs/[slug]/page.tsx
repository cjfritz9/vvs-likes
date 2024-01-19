import { getBlogPostBySlug } from '@/app/api/requests';
import WPBlogPanel from '@/components/wp-blog-panel';
import WPBlogContent from '@/components/wp_blog_content';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const headersList = headers();
  const fullUrl = headersList.get('referer')!;
  const baseUrl = fullUrl.slice(0, fullUrl.indexOf('/blogs'));
  const blog = await getBlogPostBySlug(baseUrl, slug);
  if (!blog) {
    notFound();
  }
  return {
    title: blog.title.rendered.replaceAll('&nbsp;', ' ') + ' - VVSLikes'
  };
};

const BlogPage: React.FC<any> = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const headersList = headers();
  const fullUrl = headersList.get('referer')!;
  const baseUrl = fullUrl.slice(0, fullUrl.indexOf('/blogs'));
  const blog = await getBlogPostBySlug(baseUrl, slug);
  return (
    <div className='container'>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '36px', fontWeight: 600 }}>Blog Details</p>
        <p
          dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
          style={{ maxWidth: '692px', color: '#6B7175' }}
        />
      </div>
      <div className='tw-flex tw-gap-8'>
        <WPBlogPanel blogData={blog} />
        <WPBlogContent blogContent={blog.content.rendered} />
      </div>
    </div>
  );
};

export default BlogPage;
