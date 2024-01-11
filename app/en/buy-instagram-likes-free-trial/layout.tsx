import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const FreeTrialLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='canonical' href='https://vvslikes.com/en/buy-instagram-likes-free-trial' />
        <meta
          name='google-site-verification'
          content='RFzamY1Nid1K0GTAltCTFDsiNE-NNNAvY0SPfDmus9M'
        />
      </Head>
      {children}
    </div>
  );
};

export default FreeTrialLayout;
