import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const FreeTrialLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='canonical' href='https://vvslikes.com/en/buy-instagram-likes-free-trial' />
      </Head>
      {children}
    </div>
  );
};

export default FreeTrialLayout;
