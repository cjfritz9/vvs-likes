import axios from 'axios';
import { useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import hour_glass from '@/assets/svg/hourglass.svg';
import Image from 'next/image';

interface IProps {
  setIsWebsiteTimerModal: any;
  setIsThankYouModal: any;
  selectedImage: any;
}
const TimerAndProgressBar = (props: IProps) => {
  const setIsWebsiteTimerModal = props.setIsWebsiteTimerModal;
  const setIsThankYouModal = props.setIsThankYouModal;
  const selectedImage = props.selectedImage;

  const totalTime = 120;
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getVerifyEmail = async () => {
    setIsLoading(true);

    const payload = {
      user_id: selectedImage.id,
      post_id: selectedImage.code
    };

    try {
      const res = await axios.post(`/api/email-verification`, payload);
      setIsLoading(false);
      toast.success(res.data.message, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000
      });
    } catch (err: any) {
      alert(err?.response?.data?.message ?? 'Email Verification Failed');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < totalTime) {
        setProgress(progress + 1);
      } else {
        setIsWebsiteTimerModal(false);
        setIsThankYouModal(true);
        getVerifyEmail();
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  useEffect(() => {
    // Increase progress after 5 seconds
    const timeout1 = setTimeout(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 5, totalTime));
    }, 5000);

    // Increase progress after 10 seconds
    const timeout2 = setTimeout(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 5, totalTime));
    }, 10000);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // Calculate the progress bar width
  const progressBarWidth = (progress / totalTime) * 100;

  // Adjust width to 100% when progress reaches totalTime or countdown is 0
  const adjustedProgressBarWidth = Math.min(progressBarWidth, 100);

  const beforeStyle = {
    height: '10px',
    width: `${adjustedProgressBarWidth}%`,
    transition: '1s',
    ':before': {
      content: `'${
        progress >= totalTime ? 100 : Math.round((progress / totalTime) * 100)
      }%'`,
      position: 'absolute',
      fontSize: '16px',
      right: `calc(${100 - adjustedProgressBarWidth}% - 50px)`,
      top: '-26px'
    }
  };

  return (
    <div className='width'>
      <div className='d-flex justify-content-center'>
        <h1 className='fw-600' style={{ fontSize: '56px' }}>
          {totalTime - progress}
        </h1>
        <Image
          priority
          src={hour_glass}
          alt=''
          style={{ width: '60px', height: '60px' }}
        />
      </div>

      <div className='w3-border' style={{ width: '550px' }}>
        <div className='w3-grey' style={beforeStyle}>
          <span className='percentage'>
            {progress >= totalTime
              ? '100%'
              : `${Math.round((progress / totalTime) * 100)}%`}
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default TimerAndProgressBar;
