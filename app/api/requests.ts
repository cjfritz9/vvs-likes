import { cache } from 'react';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL!
    : 'http://localhost:3000/api';

export const postCaptchaResult = cache(async (token: string): Promise<any> => {
  const response = await fetch('/api/auth/recaptcha', {
    method: 'POST',
    body: JSON.stringify(token)
  });

  const result = await response.json();

  return result;
});

export const getBlogPosts = cache(async (page?: string): Promise<any> => {
  const response = page
    ? await fetch(`/api/blogs?page=${page}`)
    : await fetch('/api/blogs');

  const result = await response.json();

  return result;
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<any> => {
  const response = await fetch(`${baseUrl}/blogs/${slug}`);

  const result = await response.json();

  return result[0];
});

export const getBlogPostsByTags = cache(async (query: string): Promise<any> => {
  const response = await fetch(`${baseUrl}/blogs/tags?query=${query}`);

  const results = await response.json();

  return results;
});
