'use client';

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiBaseUrl } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const VerifyEmailPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('code');
  console.log({ token })
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!token) {
      router.push('/');
      return;
    }

    axios
      .post(`${apiBaseUrl}/verify-email`, { verification_code: token })
      .then((response) => {
        const res = response.data;
        console.log('response ---- ', res);
        if (res.status) {
          setStatus(true);
        } else {
          router.push('/');
          return;
        }
      })
      .catch((error) => {
        const res = error.response.data;
        console.log({ res })
        alert(res.message);
        router.push('/');
        return;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      {status ? (
        <div style={{ padding: 25, textAlign: 'center' }}>
          <h1>Email Confirmed</h1>
          <p style={{ paddingTop: 10 }}>
            Thanks for confirming your email. Your free likes will be delivered
            within the next 15 minutes.
          </p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default VerifyEmailPage;