'use client';

import Link from 'next/link';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';

interface IProps {
  title: string;
  slug: string;
}

const WPBlogLinkCard: React.FC<IProps> = ({ title, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className='tw-no-underline'>
      <div className='hover:tw-bg-accent hover:tw-text-white tw-p-3 tw-rounded-xl tw-text-lg tw-text-black tw-flex tw-items-center tw-justify-between'>
        <p className='tw-mb-0 tw-max-w-[270px] tw-truncate'>{title.replaceAll('&nbsp;', ' ')}</p>

        <MdChevronRight style={{ fontSize: '28px' }} />
      </div>
    </Link>
  );
};

export default WPBlogLinkCard;
