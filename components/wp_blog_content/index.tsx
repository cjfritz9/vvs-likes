import React from 'react';
import '@/styles/blog_page.css';

interface IProps {
  title: string;
  blogContent: string;
}

const WPBlogContent: React.FC<IProps> = ({ title, blogContent }) => {
  return (
    <div>
      <h1>{ title }</h1>
    <div
      className='wp-blog'
      dangerouslySetInnerHTML={{ __html: blogContent }}
      />
      </div>
  );
};

export default WPBlogContent;
