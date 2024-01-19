import React from 'react';
import '@/styles/BlogAuthorCard.css';
import Image from 'next/image';
import author_profilepic from '@/assets/images/author_profilepic.png';
import facebook_icon from '@/assets/svg/facebook_icon.svg';
import twitter_icon from '@/assets/svg/twitter_icon.svg';
import instagram_icon from '@/assets/svg/instagram_icon.svg';
import BlogSearchBar from '../BlogSearchBar';
import WPBlogsList from './blogs-list';

interface IProps {
  blogData: {
    author?: {
      image?: string;
      name?: string;
    };
    tags: string[];
  };
}

const WPBlogPanel: React.FC<IProps> = ({ blogData }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <p className='tw-text-xl tw-border-l-2 tw-border-accent tw-pl-[10px] leading-5 tw-font-bold'>
        Search By Keyword
      </p>
      <BlogSearchBar />
      <div
        className='blog-author-card'
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
      >
        <div className='card'>
          <Image
            src={blogData.author?.image || author_profilepic}
            height={100}
            width={100}
            className='card-img-top'
            alt='Photo of Author'
          />
          <div className='card-body'>
            <h5>{blogData.author?.name || 'Ms. Savannah Beer'}</h5>
            <p>
              In today's digital age, Instagram likes hold significant value for
              individuals, influencers, and businesses alike. They serve as a
              measure of engagement and can greatly boost your profile's
              visibility.
            </p>
            <div className='author-card-icons-tray'>
              <Image
                src={twitter_icon}
                height={28}
                width={28}
                alt='twitter logo'
              />
              <Image
                src={facebook_icon}
                alt='facebook logo'
                height={28}
                width={28}
              />
              <Image
                src={instagram_icon}
                height={28}
                width={28}
                alt='instagram logo'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='tw-bg-base-300 tw-p-6 tw-rounded-[11px]'>
        <p className='tw-text-xl tw-border-l-2 tw-border-accent tw-pl-[10px] leading-5 tw-font-bold'>
          VVSLikes Blogs
        </p>
        <WPBlogsList tags={blogData.tags.join(',')} />
      </div>
    </div>
  )
};

export default WPBlogPanel;
