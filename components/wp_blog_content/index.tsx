import React from 'react';
import '@/styles/blog_page.css';

interface IProps {
  blogContent: string;
}

const WPBlogContent: React.FC<IProps> = ({ blogContent }) => {
  return (
    <div
      className='wp-blog'
      dangerouslySetInnerHTML={{ __html: blogContent }}
      />
  );
};

export default WPBlogContent;
