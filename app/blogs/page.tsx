'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import '@/styles/Blog.css';
import Pagination from 'react-bootstrap/Pagination';
import blogData, { IBlogMetadata } from '@/assets/data/blogData';
import Blogcards from '@/components/blogCard/Blogcards';
import { getBlogPosts } from '../api/requests';
import LoadingCard from '@/components/blogCard/LoadingCard';

const BlogsPage: React.FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handlePagination = async (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);
    const blogsResponse = await getBlogPosts(page.toString());
    console.log(blogsResponse);
    if (blogsResponse && blogsResponse.posts[0]) {
      setBlogs(blogsResponse.posts);
      setPages(blogsResponse.totalPages);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const blogsResponse = await getBlogPosts();
      if (blogsResponse && blogsResponse.posts[0]) {
        setBlogs(blogsResponse.posts);
        setPages(blogsResponse.totalPages);
      }
      setIsLoading(false);
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
                  {isLoading
                    ? Array.from(Array(3)).map((_any, i) => (
                        <LoadingCard key={i} />
                      ))
                    : blogs.map((blog: any, i) => {
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
                              authorProfilePic={
                                blog._embedded.author[0].avatar_urls['48']
                              }
                              authorName={blog._embedded.author[0].name}
                              slug={blog.slug}
                              prefetch={i === 0}
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
                  <Pagination.Prev
                    onClick={
                      currentPage > 1
                        ? () => handlePagination(currentPage - 1)
                        : undefined
                    }
                  />
                  {currentPage > 2 && (
                    <Pagination.Item
                      linkClassName='!tw-border'
                      onClick={() => handlePagination(1)}
                    >
                      1
                    </Pagination.Item>
                  )}
                  {currentPage > 3 && (
                    <Pagination.Ellipsis linkClassName='!tw-border-none' />
                  )}
                  {currentPage > 1 && currentPage < pages / 2 - 1 && (
                    <Pagination.Item
                      linkClassName='!tw-border-[1px] !tw-border-solid !tw-border-[#E5E7EB] !tw-w-[35px]'
                      onClick={() => handlePagination(currentPage - 1)}
                    >
                      {currentPage - 1}
                    </Pagination.Item>
                  )}
                  <Pagination.Item active>{currentPage}</Pagination.Item>

                  {currentPage < 2 && pages > 1 && (
                    <Pagination.Item
                      linkClassName='!tw-border-[1px] !tw-border-solid !tw-border-[#E5E7EB] !tw-w-[35px]'
                      onClick={() => handlePagination(currentPage + 1)}
                    >
                      {currentPage + 1}
                    </Pagination.Item>
                  )}
                  {currentPage + 1 < pages && (
                    <Pagination.Ellipsis linkClassName='!tw-border-none' />
                  )}
                  {pages > 2 && currentPage < pages && (
                    <Pagination.Item
                      linkClassName='!tw-border-[1px] !tw-border-solid !tw-border-[#E5E7EB] !tw-w-[35px]'
                      onClick={() => handlePagination(pages)}
                    >
                      {pages}
                    </Pagination.Item>
                  )}
                  <Pagination.Next
                    onClick={
                      currentPage < pages
                        ? () => handlePagination(currentPage + 1)
                        : undefined
                    }
                  />
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
