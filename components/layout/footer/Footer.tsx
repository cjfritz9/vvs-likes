'use client';

import Explore from './Explore';
import Legal from './Legal';
import Services from './Services';
// import VvsLikesDetails from "./Vvs_Likes_Details";
import footerLogo from '@/assets/images/footer-logo.png';
import countryFlag from '@/assets/images/country-flag.png';
import '@/styles/footer.css';
import Image from 'next/image';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    if (!window) return;
    (() => {
      //@ts-ignore
      var mmapiws = (window.__mmapiws = window.__mmapiws || {});
      mmapiws.accountId = process.env.NEXT_PUBLIC_MAXMIND_ACCOUNT_ID!;
      var loadDeviceJs = function () {
        var element = document.createElement('script');
        element.async = true;
        element.src = 'https://device.maxmind.com/js/device.js';
        document.body.appendChild(element);
      };
      if (window.addEventListener) {
        window.addEventListener('load', loadDeviceJs, false);
        //@ts-ignore
      } else if (window.attachEvent) {
        //@ts-ignore
        window.attachEvent('onload', loadDeviceJs);
      }
      return null;
    })();
  }, []);

  return (
    <>
      <div style={{ background: '#0D57C6', padding: '0px 0px' }}>
        <div className='container'>
          <div className='row footer-top' style={{ padding: '72px 0px' }}>
            <div className='col-6 get-like'>
              <h4
                className='text-start text-white'
                style={{
                  fontWeight: '600',
                  fontSize: '36px',
                  lineHeight: '46px'
                }}
              >
                Get 50 Likes For Free
              </h4>
              <p
                className='text-start text-white'
                style={{ lineHeight: '28px', paddingRight: '120px' }}
              >
                Simply enter your username, select your photos and see the likes
                come in. No registration or password required!
              </p>
            </div>
            <div className='col-6  mail-btn' style={{ top: '30px' }}>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control get-likes-input'
                  placeholder='Enter Your Email'
                  aria-label='Enter Your Email'
                  aria-describedby='button-addon2'
                  style={{ borderRadius: '50px', padding: '20px' }}
                />
                <button
                  className='btn text-white'
                  type='button'
                  id='button-addon2'
                  style={{
                    background: '#FF3E6C',
                    borderRadius: '50px',
                    padding: '11px 24px',
                    position: 'absolute',
                    right: '9px',
                    top: '6px',
                    fontWeight: '700'
                  }}
                >
                  Get 50 Likes Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='abc'
        style={{
          backgroundColor: 'black',
          paddingTop: '32px',
          paddingBottom: '16px'
        }}
      >
        <div className='container'>
          <div className='row row-cols-5'>
            <div className='col'>
              <Services />
              {/* <VvsLikesDetails /> */}
            </div>
            <div className='col'>
              <Explore />
            </div>
            <div className='col'>
              <Image height={67} width={67} src={footerLogo} alt={'logo'} />
            </div>
            <div
              className='col footer-end'
              style={{
                display: 'flex',
                gap: '80px',
                alignItems: 'center',
                marginTop: '-25px'
              }}
            >
              <div
                className='col support'
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <Image
                  style={{ height: '32px' }}
                  height={32}
                  width={32}
                  src={countryFlag}
                  alt='country-flag'
                />
                <p
                  className='text-white'
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: 0
                  }}
                >
                  Support@vvslikes.com
                </p>
              </div>
              <div
                className='col card-icon'
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Legal />
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#DCDCDC' }}>
            © 2023 VVSLikes.com. All Rights Reserved.{' '}
            <a style={{ color: '#DCDCDC' }} href='/terms-of-service'>
              Terms of Service
            </a>{' '}
            /{' '}
            <a style={{ color: '#DCDCDC' }} href='/privacy-policy'>
              Policies
            </a>
            .{' '}
            <a style={{ color: '#DCDCDC' }} href='/sitemap.xml'>
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
