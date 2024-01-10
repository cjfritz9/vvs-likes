import React, { PropsWithChildren } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service'
};

const TermsOfServiceLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default TermsOfServiceLayout;