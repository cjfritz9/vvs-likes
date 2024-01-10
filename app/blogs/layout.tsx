import React, { PropsWithChildren } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs'
};

const BlogsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default BlogsLayout;