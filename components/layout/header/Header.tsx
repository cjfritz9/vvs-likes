'use client';

import logo from '@/assets/images/logo.png';
import mockup from '@/assets/images/buy-instagram-likes-vvslikes-homepage.png';
import { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';
import useIsClient from '@/lib/hooks/useIsClient';
import '@/styles/header.css';

const HeaderBar = () => {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: 'nav-item nav-link text-white',
    aboutLinkClass: 'nav-item nav-link text-white',
    menuClass: ''
  });

  const { isClient } = useIsClient();

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu
    });
  };
  const show = state.menu ? 'show' : '';

  if (!isClient) {
    return null;
  }

  const location = window.location.pathname;

  return (
    <>
      {location !== '/' && (
        <div
          className='header-top'
          style={{
            background: '#F79410',
            padding: '20px 0px',
            gap: '10px',
            width: '100%'
          }}
        >
          <a className='text-white' href='#'>
            Save on Real Automatic Instagram Likes🗓️
          </a>
        </div>
      )}
      <div className='container'>
        {location === '/' ? (
          <>
            {' '}
            <nav className='navbar navbar-expand-lg'>
              <a className='navbar-brand' href='/'>
                <Image
                  priority
                  style={{
                    width: '256.91px',
                    height: '67.02px',
                    top: '32px',
                    left: '135px'
                  }}
                  height={67.02}
                  width={256.91}
                  src={logo}
                  alt='logo'
                />
              </a>
              <button
                className='navbar-toggler'
                style={{ color: 'white' }}
                type='button'
                onClick={toggleMenu}
              >
                <IoReorderThreeOutline size={42} />
                {/* <span className="navbar-toggler-icon" /> */}
              </button>
              <div
                className={'collapse navbar-collapse ' + show}
                style={{
                  justifyContent: 'end'
                }}
              >
                <div
                  className='navbar-nav'
                  style={{
                    gap: '10px'
                  }}
                >
                  <a
                    className={state.homeLinkClass}
                    href='/automatic-likes'
                    onClick={() =>
                      state.homeLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Automatic Likes
                  </a>
                  <a
                    className={state.aboutLinkClass}
                    href='/faq'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    FAQ
                  </a>
                  <a
                    className={state.aboutLinkClass}
                    href='/blog'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Blog
                  </a>

                  <a
                    className={state.aboutLinkClass}
                    href='/support'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Support
                  </a>
                  <button
                    className='btn text-white'
                    style={{
                      background: '#FF3E6C',
                      width: '144px',
                      height: ' 50px',
                      fontWeight: '700',
                      borderRadius: '50px'
                    }}
                    type='button'
                  >
                    Members
                  </button>
                </div>
              </div>
            </nav>
            <div className='row banner-one'>
              <div className='col-md-6 d-flex align-items-center'>
                <div className='banner-left'>
                  <h1 className='text-start text-white'>
                    Buy Instagram Likes with Instant Delivery
                  </h1>
                  <h2
                    className='text-start text-white'
                    style={{ fontWeight: 'bold', fontSize: '28px' }}
                  >
                    Get a FREE trial of 10-50 Real IG Likes Daily
                  </h2>
                  <p className='text-start text-white banner_dis'>
                    Buy real Instagram likes & boost your posts to trigger that
                    satisfying buzz. Give our free trial a run & never settle
                    for fake engagement again.
                  </p>
                  <div className='d-flex justify-content-start gap-3'>
                    <a
                      href='/automatic-likes'
                      className='btn text-white'
                      style={{
                        padding: '13px 20px',
                        background: '#FF3E6C',
                        borderRadius: '25px'
                      }}
                      type='button'
                      onClick={() => {
                        console.log('===========click');
                      }}
                    >
                      Auto Likes Pro
                      <button
                        style={{
                          position: 'absolute',
                          background: '#FACC05',
                          padding: '2px 5px',
                          margin: '-25px -35px',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '13px',
                          color: '#0764EB',
                          fontWeight: 'bold'
                        }}
                        type='button'
                      >
                        Free Offers
                      </button>
                    </a>
                    <button
                      className='btn text-white '
                      style={{
                        background: '#FF3E6C',
                        padding: '13px 20px',
                        borderRadius: '25px'
                      }}
                      type='button'
                    >
                      Buy Real Instagram Likes
                    </button>
                    <button
                      className='btn text-white '
                      style={{
                        background: '#FF3E6C',
                        padding: '13px 20px',
                        borderRadius: '25px'
                      }}
                      type='button'
                    >
                      Free Likes
                      <button
                        style={{
                          position: 'absolute',
                          background: '#FACC05',
                          padding: '2px 5px',
                          margin: '-25px -15px',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '15px',
                          color: '#0764EB',
                          fontWeight: 'bold'
                        }}
                        type='button'
                      >
                        Trial
                      </button>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                {' '}
                <Image
                  priority
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                  height={478}
                  width={596}
                  src={mockup}
                  alt='logo'
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {' '}
            <nav className='navbar navbar-expand-lg'>
              <a className='navbar-brand' href='/'>
                <Image
                  style={{
                    width: '256.91px',
                    height: '67.02px',
                    top: '32px',
                    left: '135px'
                  }}
                  height={67}
                  width={257}
                  src={logo}
                  alt='logo'
                />
              </a>
              <button
                className='navbar-toggler'
                style={{ color: 'white' }}
                type='button'
                onClick={toggleMenu}
              >
                <IoReorderThreeOutline size={42} />
                {/* <span className="navbar-toggler-icon" /> */}
              </button>
              <div
                className={'collapse navbar-collapse ' + show}
                style={{
                  justifyContent: 'end'
                }}
              >
                <div
                  className='navbar-nav'
                  style={{
                    gap: '10px'
                  }}
                >
                  <a
                    className={state.homeLinkClass}
                    href='/about-us'
                    onClick={() =>
                      state.homeLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    About Us
                  </a>
                  <a
                    className={state.aboutLinkClass}
                    href='/pricing-plan'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Pricing Plan
                  </a>
                  <a
                    className={state.aboutLinkClass}
                    href='/how-to-work'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    How To Works
                  </a>

                  <a
                    className={state.aboutLinkClass}
                    href='/features'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Feature
                  </a>
                  <a
                    className={state.aboutLinkClass}
                    href='/blog'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Blog
                  </a>
                  <button
                    className='btn text-white'
                    style={{
                      background: '#FF3E6C',
                      width: '144px',
                      height: ' 50px',
                      fontWeight: '700',
                      borderRadius: '50px'
                    }}
                    type='button'
                  >
                    Get Likes Free
                  </button>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </>
  );
};
export default HeaderBar;
