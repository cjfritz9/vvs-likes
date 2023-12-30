'use client';

import React from 'react';

import '@/styles/Jobs.css';
import Faq from '@/components/faq';

const SupportPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }} className='jobs'>
      <div className='jobs-uppersection' style={{ marginBottom:0 }}>
        <div className='jobs-header'>
          <h1>Customer Support Center</h1>
        </div>
        <p>
          Welcome to our Support Center! We're here to help you make the most of
          your experience with VVS Likes. Whether you have questions about
          account management, need assistance with troubleshooting, or just want
          to explore our helpful resources, you're in the right place. Below,
          you'll find frequently asked questions, detailed guides, and various
          support options to ensure you have a smooth and enjoyable journey. If
          you can't find the information you're looking for, don't hesitate to
          reach out to our dedicated customer support team—we're here to assist
          you every step of the way.
        </p>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            gap: '4px',
            fontSize: '24px',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <p>Send us an email:</p>
          <a href='mailto:support@vvslikes.com'>support@vvslikes.com</a>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default SupportPage;
