import '../../styles/WebsiteTimerAutoAndBuy.css';
import Modal from 'react-bootstrap/Modal';
import SubscriptionPlanTable from '../subscriptionPlanTable/SubscriptionPlanTable';
import AutomaticLikesPackage from '@/components/automatic_likes/automatic_likes_package';
import TimerAndProgressBar from './TimerAndProgressBar';
import customer1 from '../../assets/svg/customer1.svg';
import customer2 from '../../assets/svg/customer2.svg';
import customer3 from '../../assets/svg/customer3.svg';
import customer4 from '../../assets/svg/customer4.svg';
import customer5 from '../../assets/svg/customer5.svg';
import star from '../../assets/images/star.png';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

const customerRatingData = [
  {
    id: 1,
    image: customer1
  },
  {
    id: 2,
    image: customer2
  },
  {
    id: 3,
    image: customer3
  },
  {
    id: 4,
    image: customer4
  },
  {
    id: 5,
    image: customer5
  }
];

interface IProps {
  setIsWebsiteTimerModal: Dispatch<SetStateAction<boolean>>;
  setIsThankYouModal: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  onHide: () => void;
  isWebsiteTimerModal: boolean;
  selectedImage: any;
  setSelectedImage: Dispatch<SetStateAction<any>>;
}

const WebsiteTimerAutoAndBuy = (props: IProps) => {
  const setIsWebsiteTimerModal = props.setIsWebsiteTimerModal;
  const setIsThankYouModal = props.setIsThankYouModal;
  const selectedImage = props.selectedImage;

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <div
        className='model_wrap'
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div className='content1'>
          <p className='p1'>
            Timer started. You will receive an email when it is done.
          </p>
          <div>
            <TimerAndProgressBar
              setIsThankYouModal={setIsThankYouModal}
              setIsWebsiteTimerModal={setIsWebsiteTimerModal}
              selectedImage={selectedImage}
            />
          </div>
          <p className='p2'>Thank you for waiting</p>
          <p className='p3'>
            To help prevent bots we added a 120 second timer. We have already
            contacted our Likes network for your post. If you want to skip
            waiting please consider purchasing a package.
          </p>
        </div>

        <div className='subscriptionPlanTable'>
          <div style={{ marginTop: '50px' }}>
            <div className='subscriptionPlanTable-header'>
              <h4>
                Never Wait. Get Automatic Likes for Every New Post with VVSLikes
                Pro
              </h4>
              <p
                style={{
                  fontWeight: '400',
                  fontSize: '16px'
                }}
              >
                Members unlock exclusive benefits and rewards
              </p>
            </div>

            <AutomaticLikesPackage />
          </div>
        </div>

        <SubscriptionPlanTable />

        <div className='customer-rating-section'>
          <div className='images'>
            {customerRatingData.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item.image}
                  alt='customer'
                  style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: customerRatingData.length - index,
                    left: 25 * index + 'px'
                  }}
                />
              );
            })}
          </div>
          <div className='rating'>
            <div className='stars'>
              <Image src={star} alt='stars' />
              <Image src={star} alt='stars' />
              <Image src={star} alt='stars' />
              <Image src={star} alt='stars' />
              <Image src={star} alt='stars' />
            </div>
            <div className='rating-text'>
              <p>Rated 5.0 for Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WebsiteTimerAutoAndBuy;
