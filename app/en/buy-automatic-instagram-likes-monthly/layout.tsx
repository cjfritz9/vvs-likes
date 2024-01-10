import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Buy Automatic Instagram Likes Monthly Auto IG Likes',
    template: '%s - VVSLikes'
  },
  description:
    'Looking to buy automatic Instagram likes monthly? Try VVSLikes & let us send you the likes automatically every time you make a new post. Get real auto IG likes on any new post!'
};

const AutomaticLikesMonthlyLayout: React.FC<PropsWithChildren> = ({
  children
}) => {
  return <div>{children}</div>;
};

export default AutomaticLikesMonthlyLayout;
