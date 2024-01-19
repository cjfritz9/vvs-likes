import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs'
};

const BlogsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ margin: '3rem 0rem' }}>
      {children}
    </div>
  );
};

export default BlogsLayout;
