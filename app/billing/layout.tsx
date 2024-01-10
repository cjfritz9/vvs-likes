import React, { PropsWithChildren } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billing'
};

const BillingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default BillingLayout;