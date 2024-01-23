import { getBlogPostsByTags } from '@/app/api/requests';
import React from 'react';
import WPBlogLinkCard from './blog-link-card';

interface IProps {
  currentBlogSlug: string;
  tags: string;
}

const WPBlogsList: React.FC<IProps> = async ({ currentBlogSlug, tags }) => {
  const blogs = await getBlogPostsByTags(tags);

  return blogs.map(
    (blog: any) =>
      currentBlogSlug !== blog.slug && (
        <WPBlogLinkCard
          key={blog.title}
          title={blog.title.rendered}
          slug={blog.slug}
        />
      )
  );
};

export default WPBlogsList;
