import { getBlogPostBySlug } from '@/app/api/requests';
import WPBlogPanel from '@/components/wp-blog-panel';
import WPBlogContent from '@/components/wp_blog_content';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const blog = await getBlogPostBySlug(slug);
  if (!blog) {
    return notFound();
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
  const blog = await getBlogPostBySlug(slug);

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
        <span
          dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
          style={{ maxWidth: '692px', color: '#6B7175' }}
        />
      </div>
      <div className='tw-flex tw-flex-col-reverse lg:tw-flex-row tw-gap-8'>
        <WPBlogPanel blogData={blog} />
        <WPBlogContent blogContent={blog.content.rendered} />
      </div>
    </div>
  );
};

export default BlogPage;
