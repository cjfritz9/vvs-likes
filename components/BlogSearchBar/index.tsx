'use client';

import React, { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { useDebounce } from 'use-debounce';
import useIsClient from '@/lib/hooks/useIsClient';
import { useRouter } from 'next/navigation';

interface IBlogResult {
  title: {
    rendered: string;
  };
  slug: string;
}

const BlogSearchBar: React.FC = () => {
  const router = useRouter();
  const { isClient } = useIsClient();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [blogs, setBlogs] = useState<IBlogResult[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  const handleChange = (slug: string) => {
    if (slug.length) {
      router.push(`/blogs/${slug}`);
    }
  };

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      setIsSearching(true);
      const controller = new AbortController();
      (async () => {
        const response = await fetch(
          `/api/blogs/search?query=${debouncedQuery}`
        );

        const results = await response.json();

        if (results.length === 0) {
          setBlogs([{ title: { rendered: 'No Results' }, slug: '' }]);
        } else {
          setBlogs(results);
        }
        setIsSearching(false);
      })();
      return () => {
        controller.abort();
      };
    } else {
      setBlogs([]);
    }
  }, [debouncedQuery]);

  if (!isClient) {
    return (
      <div className='form-control'>
        <input
          type='text'
          placeholder='Search'
          className='tw-input tw-input-bordered tw-border-secondary tw-bg-primary-content tw-w-full tw-disabled'
        />
      </div>
    );
  }

  const noResults = blogs[0] && blogs[0].title.rendered === 'No Results';

  return (
    <div className='tw-form-control tw-hidden lg:tw-inline-block tw-w-full'>
      <div className='tw-relative'>
        {isSearching && (
          <div className='tw-loading tw-loading-spinner tw-loading-md tw-text-accent tw-absolute tw-right-8 tw-top-3' />
        )}
        <Combobox onChange={handleChange}>
          <Combobox.Input
            placeholder='Search...'
            className={`tw-input tw-input-bordered tw-border-secondary tw-bg-primary-content tw-w-full
              tw-transition-all tw-duration-1000`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Combobox.Options
            className={`tw-absolute tw-bg-base-100 tw-w-full tw-px-0 tw-z-50 tw-shadow-2xl ${
              noResults ? 'tw-pointer-events-none' : 'tw-cursor-pointer'
            }`}
          >
            {blogs.map((blog) => (
              <>
                <Combobox.Option key={blog.slug} value={blog.slug}>
                  {({ active }) => (
                    <span
                      className={`tw-flex tw-px-4 tw-gap-4 tw-h-20 tw-items-center tw-w-full tw-text-xl tw-text-primary tw-border-b-2 ${
                        active && !noResults
                          ? 'tw-bg-accent tw-text-white'
                          : 'tw-bg-base-200'
                      }`}
                    >
                      <p
                        className={`tw-truncate tw-pr-2 ${
                          noResults && 'tw-text-center w-full'
                        }`}
                      >
                        {blog.title.rendered.replaceAll('&nbsp;', ' ')}
                      </p>
                    </span>
                  )}
                </Combobox.Option>
              </>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </div>
  );
};

export default BlogSearchBar;
