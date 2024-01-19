'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '@/styles/Blog.css';
import Pagination from 'react-bootstrap/Pagination';
import blogData, { IBlogMetadata } from '@/assets/data/blogData';
import Blogcards from '@/components/blogCard/Blogcards';
import { getBlogPosts } from '../api/requests';

const BlogsPage: React.FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const blogsResponse = await getBlogPosts();
      if (blogsResponse && blogsResponse[0]) {
        setBlogs(blogsResponse);
      }
    })();
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
                  {blogs.map((blog: any) => {
                    blog.excerpt.rendered =
                      blog.excerpt.rendered.length > 360
                        ? blog.excerpt.rendered.slice(0, 357) + '...'
                        : blog.excerpt.rendered;
                    return (
                      <>
                        <Blogcards
                          img={blog.jetpack_featured_media_url}
                          type='instagram'
                          date={new Date(blog.date).toDateString().slice(4)}
                          blogHeader={blog.title.rendered}
                          blogDescription={blog.excerpt.rendered}
                          // authorProfilePic={blog.authorProfilePic}
                          authorName={'VVSLikes'}
                          slug={blog.slug}
                          // item={item}
                          // handleCardDetails={handleCardDetails}
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
