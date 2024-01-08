'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import '@/styles/Blog.css';
import Pagination from 'react-bootstrap/Pagination';
import blogData, { IBlogMetadata } from '@/assets/data/blogData';
import Blogcards from '@/components/blogCard/Blogcards';

const BlogsPage: React.FC = () => {
  const router = useRouter();

  const handleCardDetails = (blogCardData: IBlogMetadata) => {
    if (blogCardData) {
      localStorage.setItem('blogCarddetails', JSON.stringify(blogCardData));
      router.push('/blogs/blogdetails');
    }
  };

  useEffect(() => {
    localStorage.removeItem('blogCarddetails');
  }, []);

  return (
    <div className='blog' style={{ textAlign: 'center' }}>
      <div className='blog-header'>
        <h1>Blogs</h1>
        <p>
          Getting verified on Instagram is the biggest free promotional
          opportunity the popular app hands out. The blue check mark so
          beautiful.{' '}
        </p>
      </div>

      <div className='blog-content'>
        <div className='blog-post'>
          <div className='py-5'>
            <div className='container'>
              <>
                <div className='row hidden-md-up'>
                  {blogData.map((item) => {
                    return (
                      <>
                        <Blogcards
                          img={item.img}
                          type={item.type}
                          date={item.date}
                          blogHeader={item.blogHeader}
                          blogDescription={item.blogDescription}
                          authorProfilePic={item.authorProfilePic}
                          authorName={item.authorName}
                          item={item}
                          handleCardDetails={handleCardDetails}
                        />
                      </>
                    );
                  })}
                </div>
                <br />
              </>

              <div className='blog-pagination'>
                <Pagination>
                  {/* <Pagination.First /> */}
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{18}</Pagination.Item>
                  <Pagination.Next />
                  {/* <Pagination.Last /> */}
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
