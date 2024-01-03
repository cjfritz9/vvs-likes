'use client';

import React, { useState } from 'react';
import PackageList from '@/components/package_list';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useReCaptcha } from 'next-recaptcha-v3';
import Image from 'next/image';
import packagesHero from '@/assets/images/packages-hero.png';

export interface IFreeTrial {
  success: boolean;
  error: string;
  message: string;
  userData: Record<string, unknown>;
  instaProfile: {
    pk: string;
    username: string;
    profile_pic_url: string;
    follower_count: number;
    following_count: number;
  };
  instagramPosts: {
    code: string;
    image_versions2: {
      candidates: { url: string }[];
    };
  }[];
}

export interface IPackage {
  name: string;
  price: string[];
  save: string;
  id: string;
}

const realLikesArray: IPackage[] = [
  { name: '50 Real likes', price: ['$1.39'], save: '15%', id: '1' },
  { name: '100 Real likes', price: ['$2.49'], save: '20%', id: '2' },
  { name: '250 Real likes', price: ['$4.79'], save: '30%', id: '3' },
  { name: '500 Real likes', price: ['$6.49'], save: '35%', id: '4' }
];

const realLikesArrayOther: IPackage[] = [
  { name: '1000 Real likes', price: ['$34.99'], save: '46%', id: '5' },
  { name: '2500 Real likes', price: ['$74.99'], save: '55%', id: '6' },
  { name: '5000 Real likes', price: ['$124.99'], save: '64%', id: '7' },
  { name: '10000 Real likes', price: ['$199.99'], save: '75%', id: '8' }
];

interface IProps {
  setIsSelectPostModal: any;
  setUserData: any;
}

const toastOptions = {
  transition: Slide,
  hideProgressBar: true,
  autoClose: 2000
};

const RealInstagramLikes = (props: IProps) => {
  const { setIsSelectPostModal, setUserData } = props;
  const [isSelectedRadio, setIsSelectedRadio] = useState();
  const [userDetail, setUserDetail] = useState({ user_name: '', email: '' });
  const [errors, setErrors] = useState({ emailError: '', userNameError: '' });
  // const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const { executeRecaptcha } = useReCaptcha();

  const handleUserDetailChange = (e: any) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
    validateField(name, value);
  };

  const handleChangeRadio = (e: any) => {
    const { value, id } = e.target;
    setIsSelectedRadio(value);
    setSelected(id);
  };

  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'email':
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            emailError: 'Email is required'
          }));
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            emailError: 'Invalid email format'
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, emailError: '' }));
        }
        break;
      case 'user_name':
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            userNameError: 'Username is required'
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, userNameError: '' }));
        }
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      !errors.emailError &&
      !errors.userNameError &&
      userDetail.email &&
      userDetail.user_name
    );
  };

  const handleClickGetFreeLikes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userDetail.email.includes('@') || !userDetail.email.includes('.')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Please enter a valid email address'
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emailError: '' }));
    }

    let res;
    // setIsLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha('form_submit');
      const payload = {
        email: userDetail.email,
        igu: userDetail.user_name,
        'g-recaptcha-response': recaptchaToken
      };

      res = await axios.post<IFreeTrial>(`/api/free-instagram-likes`, payload);

      if (res.data.success === false) {
        toast.error(res.data.message, toastOptions);
        return;
      }

      // setIsLoading(false);
      toast.success(
        'Success!', // TODO - this was res.data.message
        toastOptions
      );
      setUserData(res.data);
      setIsSelectPostModal(true);
      setErrors({ emailError: '', userNameError: '' });
    } catch (error) {
      // setIsLoading(false);
      toast.error(
        //@ts-ignore
        typeof error === 'string' ? error : error.response.data.error,
        toastOptions
      );
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='bg-white get-started_block mobile_padding'>
            <div className='text-center'>
              <h3
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#02111B'
                }}
              >
                Get Started With Real Instagram Likes 😊
              </h3>
              <p
                style={{
                  lineHeight: '24px',
                  color: '#6B7175',
                  textAlign: 'justify'
                }}
              >
                <b>Receive free Instagram likes every 24 hours:</b> just submit
                your username and email, select posts, verify your valid email,
                and get likes quickly.
              </p>
            </div>

            <form
              onSubmit={(e) => handleClickGetFreeLikes(e)}
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              data-callback='onSubmit'
              data-action='submit'
              style={{ padding: '0px 6px' }}
            >
              <h3
                className='text-start'
                style={{
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#02111B'
                }}
              >
                Free Trial
              </h3>
              <div
                className='pl-2'
                style={{
                  backgroundColor: '#c5d6f2',
                  borderRadius: '10px'
                }}
              >
                <div className='form-check d-flex justify-content-between'>
                  <div
                    className='d-flex justify-content-between align-items-center'
                    style={{
                      gap: '12px'
                    }}
                  >
                    <div
                      className='form-check-label'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '18px',
                        fontWeight: '600',
                        height: '48px'
                      }}
                    >
                      Free 10-50 Real Likes
                    </div>
                    <span
                      style={{
                        backgroundColor: '#FACC05',
                        color: '#0863EB',
                        padding: '4px 8px 4px 8px',
                        marginTop: '5px',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}
                      className='badge rounded-pill'
                    >
                      Daily Free Trial
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  lineHeight: '28px',
                  marginTop: '32px'
                }}
              >
                <div>
                  <div className='d-flex'>
                    <div className='col-md-6 mb-3'>
                      <input
                        style={{
                          width: '97%',
                          color: '#02111B',
                          fontSize: '16px',
                          border: errors.userNameError && '2px solid red'
                        }}
                        name='user_name'
                        type='text'
                        className='form-control'
                        defaultValue={userDetail.user_name}
                        onChange={handleUserDetailChange}
                        placeholder='Enter Instagram valid username e.g. “cristiano”'
                      />
                      {errors.userNameError && (
                        <span
                          className='d-flex'
                          style={{ color: 'red', marginTop: '10px' }}
                        >
                          {errors.userNameError}
                        </span>
                      )}
                    </div>
                    <div className='col-md-6 mb-3'>
                      <input
                        style={{
                          width: '97%',
                          color: '#02111B',

                          border: errors.emailError && '2px solid red'
                        }}
                        type='email'
                        name='email'
                        defaultValue={userDetail.email}
                        onChange={handleUserDetailChange}
                        className='form-control'
                        placeholder='Enter your email address'
                      />
                      {errors.emailError && (
                        <span
                          className='d-flex'
                          style={{ color: 'red', marginTop: '10px' }}
                        >
                          {errors.emailError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'right',
                      width: '100%'
                    }}
                  >
                    <button
                      className='btn rounded-5'
                      style={{
                        border: 'none',
                        color: 'white',
                        // height: '50px',
                        fontWeight: '700',
                        fontSize: '16px',
                        background: '#FF3E6C',
                        opacity: 1,
                        alignSelf: 'right',
                        padding: '16px 20px'
                      }}
                      disabled={!isFormValid()}
                    >
                      Get My Free Likes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='bg-white get-started_block mobile_padding'>
            <div style={{ marginTop: '50px' }}>
              <h3
                className='text-center'
                style={{ fontSize: '36px', fontWeight: 600 }}
              >
                Instantly Buy Real Instagram Likes 🎉
              </h3>
              <p className='text-center'>
                At VVSLikes, you can buy Instagram likes that deliver within
                minutes or subscribe to our <a href='/buy-automatic-instagram-likes'>automatic likes service</a> which sends
                likes to every new post.
              </p>
              <p
                className='text-start'
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#02111B'
                }}
              >
                Buy Likes
              </p>
              <div
                className='packages-wrapper'
                style={{ display: 'flex', width: '100%' }}
              >
                <div style={{ display: 'flex', flexGrow: 1 }}>
                  <PackageList
                    packagelistArray={realLikesArray}
                    selected={selected}
                    handleChangeRadio={handleChangeRadio}
                    isSelectedRadio={isSelectedRadio}
                    heading={'View All Packages'}
                    content={
                      <PackageList
                        packagelistArray={realLikesArrayOther}
                        selected={selected}
                        handleChangeRadio={handleChangeRadio}
                        isSelectedRadio={isSelectedRadio}
                        btnText={'Buy Now'}
                      />
                    }
                    saveUpto={'Save up to 70%'}
                    instantlyDelivery={[<></>]}
                    btnText={'Buy Now'}
                  />
                </div>
                <Image
                  src={packagesHero}
                  height={460}
                  width={476}
                  alt='Instagram likes in real time'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />,
    </>
  );
};
export default RealInstagramLikes;
