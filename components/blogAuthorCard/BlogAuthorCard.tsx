import '@/styles/BlogAuthorCard.css';
import author_profilepic from '@/assets/images/author_profilepic.png';
import facebook_icon from '@/assets/svg/facebook_icon.svg';
import twitter_icon from '@/assets/svg/twitter_icon.svg';
import instagram_icon from '@/assets/svg/instagram_icon.svg';
import Image from 'next/image';

function BlogAuthorCard() {
  return (
    <div className='blog-author-card'>
      <div className='card'>
        <Image
          src={author_profilepic}
          height={100}
          width={100}
          className='card-img-top'
          alt='Photo of Author'
        />
        <div className='card-body'>
          <h5>Ms. Savannah Beer</h5>
          <p>
            In today's digital age, Instagram likes hold significant value for
            individuals, influencers, and businesses alike. They serve as a
            measure of engagement and can greatly boost your profile's
            visibility.
          </p>
          <div className='author-card-icons-tray'>
            <Image
              src={twitter_icon}
              height={18}
              width={18}
              alt='twitter logo'
            />
            <Image
              src={facebook_icon}
              alt='facebook logo'
              height={18}
              width={18}
              style={{ height: '17px', width: '17px' }}
            />
            <Image
              src={instagram_icon}
              height={18}
              width={18}
              alt='instagram logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
