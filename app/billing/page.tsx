import React from 'react';
import Image from 'next/image';
import author_profile_pic from '@/assets/images/author_profilepic.png';
import pink_heart_icon from '@/assets/svg/pink_heart_icon.svg';
import green_heart_icon from '@/assets/svg/green_heart_icon.svg';
import billing_icon1 from '@/assets/svg/billing_icon1.svg';
import billing_icon2 from '@/assets/svg/billing_icon2.svg';
import billing_icon3 from '@/assets/svg/billing_icon3.svg';
import billing_icon4 from '@/assets/svg/billing_icon4.svg';
import billing_icon5 from '@/assets/svg/billing_icon5.svg';
import back_icon from '@/assets/svg/back_icon.svg';
import apple from '@/assets/images/apple-pay.png';
import diners from '@/assets/images/diners.png';
import discover from '@/assets/images/discover.png';
import amex from '@/assets/images/amex.png';
import mastercard from '@/assets/images/mastercard.png';
import visa from '@/assets/images/visa.png';
import '@/styles/Billing.css';


const BillingPage: React.FC = () => {
  return (
    <section className='billing'>
      <div className='container'>
        <div className='row'>
          <div className='back_button align-items-center'>
            <Image
              src={back_icon}
              alt='back icon'
              height={35}
              width={35}
              style={{ height: '35px', width: '35px', borderRadius: '20px' }}
            />
            <h1
              style={{
                color: 'white',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '24px',
                marginBottom: '0px'
              }}
              className='mb--0'
            >
              Back
            </h1>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <div className='left_wrap'>
              <div className='col-style-1'>
                <Image src={author_profile_pic} alt='Profile Picture' />
                <h4>@demousername</h4>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h2 className='confirm-order'>Confirm Order:</h2>
              </div>
              <div className='main_wrap'>
                <div className='col-style-2'>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      width: '100%',
                      gap: '1rem',
                      justifyContent: 'start',
                      padding: '0 20px'
                    }}
                  >
                    <Image
                      className='heart_icon'
                      src={pink_heart_icon}
                      height={20}
                      width={20}
                      alt='Pink Heart Icon'
                    />
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '18px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        marginBottom: '0px'
                      }}
                    >
                      250 Real Likes
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '18px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      marginBottom: '0px'
                    }}
                  >
                    $29.99
                  </p>
                </div>

                <div className='col-style-2 mt-3'>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      width: '100%',
                      gap: '1rem',
                      justifyContent: 'start',
                      padding: '0 20px',
                      marginBottom: '0px'
                    }}
                  >
                    <Image
                      className='heart_icon'
                      height={20}
                      width={20}
                      src={green_heart_icon}
                      alt='Green Heart Icon'
                    />
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '18px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        marginBottom: '0px'
                      }}
                    >
                      100 Real Likes
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '18px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      marginBottom: '0px'
                    }}
                  >
                    $19.99
                  </p>
                </div>
              </div>
              <div className='col-style-2 total_count'>
                <h2>Total</h2>
                <h2>$49.98</h2>
              </div>

              <div className='col-style-3'>
                <div className='d-flex align-items-center gap-2'>
                  <div className='div1'>
                    <input
                      type='radio'
                      id='css'
                      name='fav_language'
                      checked
                      className='radio_input'
                    />
                  </div>

                  <div className='div2'>
                    <p
                      style={{
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '16px',
                        marginBottom: '0px',
                        textAlign: 'left'
                      }}
                    >
                      Add 100 Real likes
                    </p>
                    <div className='d-flex py-2 gap-2 align-items-center'>
                      <p
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '16px',
                          alignItems: 'center',
                          marginBottom: '0px'
                        }}
                      >
                        $19.99
                      </p>
                      <div className='save20'>Save 20%</div>
                    </div>
                  </div>
                </div>

                <div className='div3'>
                  <strong>+</strong>
                </div>
              </div>

              <div className='col-style-3'>
                <div className='d-flex align-items-center gap-2'>
                  <div className='div1'>
                    <input type='radio' checked className='radio_input' />
                  </div>

                  <div className='div2'>
                    <p
                      style={{
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '16px',
                        marginBottom: '0px',
                        textAlign: 'left'
                      }}
                    >
                      Add 500 Real likes
                    </p>
                    <div className='d-flex py-2 gap-2 align-items-center'>
                      <p
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '16px',
                          alignItems: 'center',
                          marginBottom: '0px'
                        }}
                      >
                        $39.99
                      </p>
                      <div className='save20'>Save 35%</div>
                    </div>
                  </div>
                </div>
                <div className='div3'>
                  <strong>+</strong>
                </div>
              </div>

              <div className='col-style-4'>
                <p>Have a coupon code?</p>
                {/* <input type="text" placeholder="Enter Coupon Code" /> */}
                <div className='col-12'>
                  <div className='d-flex flex-column'>
                    <input
                      className='form-control mb-1'
                      type='text'
                      placeholder='Enter Coupon Code'
                    />
                  </div>
                </div>
                <button className='apply-coupon-btn'>Apply Coupon</button>
              </div>

              <div className='col-style-5'>
                <div className='links'>
                  <div>
                    <Image
                      src={billing_icon1}
                      height={20}
                      width={20}
                      alt='billing icon'
                    />{' '}
                    <p>Real Likes from active people</p>
                  </div>
                  <div>
                    <Image
                      src={billing_icon2}
                      height={20}
                      width={20}
                      alt='billing icon'
                    />{' '}
                    <p>No Instagram password required</p>
                  </div>
                  <div>
                    <Image
                      src={billing_icon3}
                      height={20}
                      width={20}
                      alt='billing icon'
                    />{' '}
                    <p>Instant delivery, Up to 30 minutes</p>
                  </div>
                  <div>
                    <Image
                      src={billing_icon4}
                      height={20}
                      width={20}
                      alt='billing icon'
                    />{' '}
                    <p>VVSLike No-Drop Promise</p>
                  </div>
                  <div>
                    <Image
                      src={billing_icon5}
                      height={20}
                      width={20}
                      alt='billing icon'
                    />{' '}
                    <p>
                      Need Help?{' '}
                      <a href='Support@vvslikes.com'>Support@vvslikes.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-8'>
            <div className='payment_side'>
              <div className='header px-2'>
                <h2 className='payment_title'>Pay with Credit / Debit Card</h2>
                <div className='card-options'>
                  <Image src={apple} height={25} width={40} alt='apple pay logo' />
                  <Image src={diners} height={25} width={40} alt='diners payment logo' />
                  <Image src={discover} height={25} width={40} alt='discover card logo' />
                  <Image src={mastercard} height={25} width={40} alt='mastercard card logo' />
                  <Image src={visa} height={25} width={40} alt='visa card logo' />
                  <Image src={amex} height={25} width={40} alt='american express card logo' />
                </div>
              </div>

              <div className='container'>
                <div className='row gx-3'>
                  <div className='col-12'>
                    <div className='d-flex flex-column'>
                      <p className='text mb-1'>Card Number</p>
                      <input
                        className='form-control mb-3'
                        type='text'
                        placeholder='0000 0000 0000 0000'
                      />
                    </div>
                  </div>

                  <div
                    className='col-12'
                    style={{ display: 'flex', gap: '10px' }}
                  >
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>MM/YY</p>
                        <input
                          className='form-control mb-3'
                          type='text'
                          placeholder='MM/YYYY'
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>CVV</p>
                        <input
                          className='form-control mb-3 pt-2 '
                          type='password'
                          placeholder='123'
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className='payment_title billing_add'>Billing Address</h2>

                  <div
                    className='col-12'
                    style={{ display: 'flex', gap: '10px' }}
                  >
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>Country*</p>
                        <input
                          className='form-control mb-3'
                          type='text'
                          placeholder='MM/YYYY'
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>Postal Code*</p>
                        <input
                          className='form-control mb-3 pt-2 '
                          type='password'
                          placeholder='00000'
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className='col-12'
                    style={{ display: 'flex', gap: '10px' }}
                  >
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>Street Address</p>
                        <input
                          className='form-control mb-3'
                          type='text'
                          placeholder='000 Street Name'
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='d-flex flex-column'>
                        <p className='text mb-1'>Phone Number</p>
                        <input
                          className='form-control mb-3 pt-2 '
                          type='password'
                          placeholder='0000 000 0000'
                        />
                      </div>
                    </div>
                  </div>

                  <button className='col-7-btn'>Pay $29.99</button>
                  <p className='billing_dis'>
                    By finalizing your purchase, you're agreeing to our Terms of
                    Service and Privacy Policy. All prices are listed in U.S.
                    dollars. If you're paying with a different currency, please
                    note that the final amount may vary due to exchange rates
                    and additional fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingPage;
