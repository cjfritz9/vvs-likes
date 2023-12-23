import { cache } from "react";

export const postCaptchaResult = cache(async (token: string): Promise<any> => {
  const response = await fetch('/api/auth/recaptcha', {
    method: 'POST',
    body: JSON.stringify(token)
  });

  const result = await response.json();

  return result;
});