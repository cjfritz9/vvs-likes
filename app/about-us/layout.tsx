import React, { PropsWithChildren } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us'
};

const AboutUsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default AboutUsLayout;