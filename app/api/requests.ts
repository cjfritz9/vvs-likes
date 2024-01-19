import { cache } from 'react';

export const postCaptchaResult = cache(async (token: string): Promise<any> => {
  const response = await fetch('/api/auth/recaptcha', {
    method: 'POST',
    body: JSON.stringify(token)
  });

  const result = await response.json();

  return result;
});

export const getBlogPosts = cache(async (): Promise<any> => {
  const response = await fetch('/api/blogs');

  const result = await response.json();

  return result;
});

export const getBlogPostBySlug = cache(
  async (baseUrl: string, slug: string): Promise<any> => {
    const response = await fetch(`${baseUrl}/api/blogs/${slug}`);

    const result = await response.json();

    return result[0];
  }
);

export const getBlogPostsByTags = cache(
  async (baseUrl: string, query: string): Promise<any> => {
    const response = await fetch(`${baseUrl}/api/blogs/tags?query=${query}`);

    const results = await response.json();

    return results;
  }
);
