'use client'

import React, { useState } from 'react';
import PackageList from '@/components/package_list';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { apiBaseUrl } from '@/lib/utils';
import { useReCaptcha } from 'next-recaptcha-v3';

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
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    e.preventDefault();

    if (!emailRegex.test(userDetail.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Please enter a valid email address'
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emailError: '' })); // Clear any previous errors
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

      res = await axios.post<IFreeTrial>(
        `${apiBaseUrl}/free-instagram-likes`,
        payload
      );

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
      console.log({error});
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
                Get Started With Real Instagram Likes
              </h3>
              <p
                style={{
                  lineHeight: '24px',
                  color: '#6B7175'
                }}
              >
                At VVSLikes, you can buy Instagram likes that deliver within
                minutes. Explore our free trial below, or subscribe to our
                automatic likes service.
              </p>
            </div>

            <form
            onSubmit={(e) => handleClickGetFreeLikes(e)}
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
            data-callback='onSubmit'
            data-action='submit'>
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
                style={{
                  border: '1px solid #0d57c6',
                  borderRadius: '10px',
                  lineHeight: '28px',
                  marginTop: '32px',
                  backgroundColor: '#f3f6fc'
                }}
              >
                <div style={{ padding: '24px' }}>
                  <div className='d-flex'>
                    <div className='col-md-6 mb-3'>
                      <label
                        className='form-label d-flex'
                        style={{ color: '#02111B' }}
                      >
                        User name:
                      </label>
                      <input
                        style={{
                          width: '97%',
                          color: '#6B7175',
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
                      <label
                        className='form-label d-flex'
                        style={{ color: '#02111B' }}
                      >
                        Email:
                      </label>
                      <input
                        style={{
                          width: '97%',
                          color: '#6B7175',
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
                          gap: '11px'
                        }}
                      >
                        <input
                          className='form-check-input'
                          type='radio'
                          id={'real-likes'}
                          value={'real-likes'}
                          onChange={handleChangeRadio}
                          name={'real-likes'}
                          style={{
                            margin: '12px 0px',
                            backgroundColor: '#FF3E6C',
                            boxShadow: 'none',
                            border: 'transparent'
                          }}
                          checked={isSelectedRadio === 'real-likes'}
                        />
                        <label
                          className='form-check-label ms-2'
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          10-50 Real Likes
                        </label>
                        <span
                          style={{
                            backgroundColor: 'yellow',
                            color: '#0863EB',
                            padding: '4px 8px 4px 8px',
                            marginTop: '5px',
                            fontSize: '16px',
                            fontWeight: '700'
                          }}
                          className='badge rounded-pill'
                        >
                          {'Free'}
                        </span>
                      </div>

                      <button
                        className='btn rounded-3'
                        style={{
                          border: 'none',
                          color: 'white',
                          width: '210px',
                          fontWeight: '700',
                          fontSize: '14px',
                          background: '#FF3E6C',
                          opacity: 1
                        }}
                        disabled={!isFormValid()}
                      >
                        Get 50 Instagram Free Likes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div style={{ marginTop: '50px' }}>
              <h3
                className='text-start'
                style={{
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#02111B'
                }}
              >
                Buy Likes
              </h3>

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
                instantlyDelivery={[
                  <span key={0} className='instant-like'>
                    250
                  </span>,
                  ' Real Likes Delivered instantly, ',
                  <span key={1} className='instant-like'>
                    29.99
                  </span>
                ]}
                btnText={'Buy Now'}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />,
    </>
  );
};
export default RealInstagramLikes;
