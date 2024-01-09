import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const ENLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel='alternate'
          hrefLang='en-US'
          href='https://vvslikes.com/en/'
        />
      </Head>
      {children}
    </div>
  );
};

export default ENLayout;
