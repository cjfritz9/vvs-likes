'use client';

import logo from '@/assets/images/logo.png';
import mockup from '@/assets/images/buy-instagram-likes-vvslikes-homepage.png';
import { useCallback, useEffect, useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';
import useIsClient from '@/lib/hooks/useIsClient';
import '@/styles/header.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const HeaderBar = () => {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: 'nav-item nav-link text-white',
    aboutLinkClass: 'nav-item nav-link text-white',
    menuClass: ''
  });
  const location = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // const { isClient } = useIsClient();

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu
    });
  };
  const show = state.menu ? 'show' : '';

  // if (!isClient) {
  //   return null;
  // }

  const handleScrollIntoView = useCallback(
    (componentId: string) => {
      if (location === '/') {
        document.getElementById(componentId)!.scrollIntoView();
      } else {
        router.push(
          `/?scrollTo=${componentId}`
        );
      }
    },
    [location, router]
  );

  useEffect(() => {
    if (location === '/' && searchParams.get('scrollTo')) {
      handleScrollIntoView(searchParams.get('scrollTo')!);
    }
  }, [location, searchParams, handleScrollIntoView]);

  return (
    <>
      {/* {location !== '/' &&
        location !== '/' && (
          <div
            className='header-top'
            style={{
              background: '#F79410',
              padding: '20px 0px',
              gap: '10px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <a className='text-white' href='#'>
              Save on Real Automatic Instagram Likes 🗓️
            </a>
          </div>
        )} */}
      <div className='container'>
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
                {/* <a
                    className={state.homeLinkClass}
                    href='/automatic-likes'
                    onClick={() =>
                      state.homeLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Automatic Likes
                  </a> */}
                <a
                  className={state.homeLinkClass}
                  href='#'
                  onClick={
                    () => handleScrollIntoView('how-vvs-works-container')
                    // () =>
                    // state.homeLinkClass === 'nav-item nav-link'
                    //   ? 'nav-item nav-link active'
                    //   : 'nav-item nav-link'
                  }
                >
                  How It Works
                </a>
                <a
                  className={state.homeLinkClass}
                  href='#'
                  onClick={
                    () => handleScrollIntoView('pricing-container')
                    // () =>
                    // state.homeLinkClass === 'nav-item nav-link'
                    //   ? 'nav-item nav-link active'
                    //   : 'nav-item nav-link'
                  }
                >
                  Pricing
                </a>
                <a
                  className={state.homeLinkClass}
                  href='#'
                  onClick={
                    () => handleScrollIntoView('features-container')
                    // () =>
                    // state.homeLinkClass === 'nav-item nav-link'
                    //   ? 'nav-item nav-link active'
                    //   : 'nav-item nav-link'
                  }
                >
                  Features
                </a>
                {location === '/' && (
                  <a
                    className={state.aboutLinkClass}
                    href='#'
                    onClick={() => handleScrollIntoView('faq-container')}
                  >
                    FAQ
                  </a>
                )}
                {location !== '/' && (
                  <a
                    className={state.aboutLinkClass}
                    href='/blogs'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Blog
                  </a>
                )}

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
                {location !== '/' && (
                  <a
                    href='#'
                    className='btn text-white '
                    style={{
                      background: '#FF3E6C',
                      padding: '13px 20px',
                      borderRadius: '25px'
                    }}
                    type='button'
                    onClick={() => handleScrollIntoView('free-likes-container')}
                  >
                    Get Likes
                  </a>
                )}
                {/* <button
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
                  </button> */}
              </div>
            </div>
          </nav>
          {location === '/' && (
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
                  <div className='d-flex justify-content-start gap-3 header-buttons-wrapper'>
                    <a
                      href='/en/buy-automatic-instagram-likes-monthly'
                      className='btn text-white'
                      style={{
                        position: 'relative',
                        padding: '13px 20px',
                        background: '#FF3E6C',
                        borderRadius: '25px'
                      }}
                      type='button'
                    >
                      Automatic Likes
                      <span
                        className='button-badges'
                        style={{
                          position: 'absolute',
                          background: '#FACC05',
                          padding: '2px 5px',
                          top: '-14px',
                          right: '-12px',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '13px',
                          color: '#0764EB',
                          fontWeight: 'bold'
                        }}
                      >
                        Free Offers
                      </span>
                    </a>
                    <a
                      href='#'
                      className='btn text-white '
                      style={{
                        background: '#FF3E6C',
                        padding: '13px 20px',
                        borderRadius: '25px'
                      }}
                      type='button'
                      onClick={() =>
                        handleScrollIntoView('buy-likes-container')
                      }
                    >
                      Buy Real Instagram Likes
                    </a>
                    <a
                      href='#'
                      className='btn text-white '
                      style={{
                        position: 'relative',
                        background: '#FF3E6C',
                        padding: '13px 20px',
                        borderRadius: '25px'
                      }}
                      type='button'
                      onClick={() =>
                        handleScrollIntoView('free-likes-container')
                      }
                    >
                      Free Likes
                      <span
                        className='button-badges'
                        style={{
                          position: 'absolute',
                          background: '#FACC05',
                          padding: '2px 5px',
                          top: '-14px',
                          right: '-12px',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '15px',
                          color: '#0764EB',
                          fontWeight: 'bold'
                        }}
                      >
                        Trial
                      </span>
                    </a>
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
          )}
        </>
      </div>
    </>
  );
};

export const HeaderBarFallback = () => {
  return (
    <>
      {/* {location !== '/' &&
        location !== '/' && (
          <div
            className='header-top'
            style={{
              background: '#F79410',
              padding: '20px 0px',
              gap: '10px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <a className='text-white' href='#'>
              Save on Real Automatic Instagram Likes 🗓️
            </a>
          </div>
        )} */}
      <div className='container'>
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
            >
              <IoReorderThreeOutline size={42} />
              {/* <span className="navbar-toggler-icon" /> */}
            </button>
            <div
              className={'collapse navbar-collapse '}
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
                {/* <a
                    className={state.homeLinkClass}
                    href='/automatic-likes'
                    onClick={() =>
                      state.homeLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Automatic Likes
                  </a> */}
                <a className={'nav-item nav-link text-white'} href='#'>
                  How It Works
                </a>
                <a className={'nav-item nav-link text-white'} href='#'>
                  Pricing
                </a>
                <a className={'nav-item nav-link text-white'} href='#'>
                  Features
                </a>

                <a className={'nav-item nav-link text-white'} href='#'>
                  FAQ
                </a>

                {/* {location !== '/' && (
                  <a
                    className={state.aboutLinkClass}
                    href='/blogs'
                    onClick={() =>
                      state.aboutLinkClass === 'nav-item nav-link'
                        ? 'nav-item nav-link active'
                        : 'nav-item nav-link'
                    }
                  >
                    Blog
                  </a>
                )} */}

                <a className={'nav-item nav-link text-white'} href='/support'>
                  Support
                </a>
                {/* {location !== '/' && (
                  <a
                    href='#'
                    className='btn text-white '
                    style={{
                      background: '#FF3E6C',
                      padding: '13px 20px',
                      borderRadius: '25px'
                    }}
                    type='button'
                    onClick={() => handleScrollIntoView('free-likes-container')}
                  >
                    Get Likes
                  </a>
                )} */}
                {/* <button
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
                  </button> */}
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
                  satisfying buzz. Give our free trial a run & never settle for
                  fake engagement again.
                </p>
                <div className='d-flex justify-content-start gap-3 header-buttons-wrapper'>
                  <a
                    href='/en/buy-automatic-instagram-likes-monthly'
                    className='btn text-white'
                    style={{
                      position: 'relative',
                      padding: '13px 20px',
                      background: '#FF3E6C',
                      borderRadius: '25px'
                    }}
                    type='button'
                  >
                    Automatic Likes
                    <span
                      className='button-badges'
                      style={{
                        position: 'absolute',
                        background: '#FACC05',
                        padding: '2px 5px',
                        top: '-14px',
                        right: '-12px',
                        borderRadius: '25px',
                        border: 'none',
                        fontSize: '13px',
                        color: '#0764EB',
                        fontWeight: 'bold'
                      }}
                    >
                      Free Offers
                    </span>
                  </a>
                  <a
                    href='#'
                    className='btn text-white '
                    style={{
                      background: '#FF3E6C',
                      padding: '13px 20px',
                      borderRadius: '25px'
                    }}
                    type='button'
                  >
                    Buy Real Instagram Likes
                  </a>
                  <a
                    href='#'
                    className='btn text-white '
                    style={{
                      position: 'relative',
                      background: '#FF3E6C',
                      padding: '13px 20px',
                      borderRadius: '25px'
                    }}
                    type='button'
                  >
                    Free Likes
                    <span
                      className='button-badges'
                      style={{
                        position: 'absolute',
                        background: '#FACC05',
                        padding: '2px 5px',
                        top: '-14px',
                        right: '-12px',
                        borderRadius: '25px',
                        border: 'none',
                        fontSize: '15px',
                        color: '#0764EB',
                        fontWeight: 'bold'
                      }}
                    >
                      Trial
                    </span>
                  </a>
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
      </div>
    </>
  );
};

export default HeaderBar;
