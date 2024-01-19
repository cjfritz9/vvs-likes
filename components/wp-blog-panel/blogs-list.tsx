import { getBlogPostsByTags } from '@/app/api/requests';
import { headers } from 'next/headers';
import React from 'react';
import WPBlogLinkCard from './blog-link-card';

interface IProps {
  tags: string;
}

const WPBlogsList: React.FC<any> = async ({ tags }) => {
  const headersList = headers();
  const fullUrl = headersList.get('referer')!;
  const baseUrl = fullUrl.slice(0, fullUrl.indexOf('/blogs'));
  const blogs = await getBlogPostsByTags(baseUrl, tags);

  return blogs.map((blog: any) => (
    <WPBlogLinkCard
      key={blog.title}
      title={blog.title.rendered}
      slug={blog.slug}
    />
  ));
};

export default WPBlogsList;
