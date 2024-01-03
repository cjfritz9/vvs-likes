'use client';

import { Accordion } from 'react-bootstrap';
import '@/styles/faq.css';
import useIsClient from '@/lib/hooks/useIsClient';
import { usePathname } from 'next/navigation';

const Faq = () => {
  const location = usePathname();
  // const { isClient } = useIsClient();
  // if (!isClient) return null;

  return (
    <div className='faq-main'>
      <div
        className='container'
        style={{ marginTop: location === '/faq' ? '80px' : 'auto' }}
      >
        <div className='row'>
          <div>
            <h4
              className='text-center heading'
              style={{ fontSize: '36px', fontWeight: 'bold' }}
            >
              Frequently Asked Question
            </h4>

            <div style={{ marginTop: '24px' }}>
              <p className='fw-normal text-base text-center'>
                Here you'll find frequently asked question about our services.
                If you have any additional question, please <br />{' '}
                <a className='fw-mormal text-base' href='contact-us'>
                  contact us.
                </a>
              </p>
              <p className='fw-bold text-base'></p>
            </div>
          </div>
          <div className='col-md-12' style={{ marginTop: '40px' }}>
            <Accordion className='faq-accordion'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  Why does it help to buy likes on instagram?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  When you buy likes, it's like getting a bunch of people to
                  line up in front of your store. People see the crowd, and the
                  larger the crowd, the more they think, "Wow, this place is
                  really popular and cool!" and are more likely to check what
                  it’s all about.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  Why choose VVSLikes for your Instagram likes?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  To be fair, there are hundreds, even thousands of places you
                  could get likes and just like diamonds, there are different
                  qualities, ranging from poor quality to VVS, which is the
                  purest level you can find. We only certify and send you the
                  highest quality real likes, VVS likes.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  {' '}
                  How long does it take to get my likes?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  As soon as you tell us where to send the likes, we notify our
                  network and they start to like your post(s) within minutes.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  What are the secrets to a viral post?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Going viral looks different from everyone's point of view,
                  however, our pro team at VVSLikes, gives you the tools &
                  secrets you need to achieve new heights sooner than later.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  Is it safe to buy likes online?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Of course it’s safe. Though Instagram prefers you to pay for
                  their sponsored ads, that requires an expert to create
                  converting ad space thus becoming non-feasible & time
                  consuming. The team at VVS gets to the point and brings you a
                  crowd of safe engagement, within a few clicks.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='5'>
                <Accordion.Header>
                  Will my likes drop?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Since we utilize our VVS network, we can certify not only the
                  quality, but the assurance our likes will last. If anything
                  seems out of the ordinary, our 24/7 support is always there to
                  help.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='6'>
                <Accordion.Header>
                  How should I pick a package?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  We recommend going with a package that best matches your
                  current follower/like ratio, which often runs off 1 like for
                  every 5 followers, or 20%. Keep this in mind as a goal.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='7'>
                <Accordion.Header>
                  How do I go from zero to hero?
                  <span>
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.5 10C8.28658 10.0002 8.07521 9.95878 7.87805 9.87807C7.68089 9.79735 7.50181 9.67895 7.35111 9.52967L0.456162 2.72037C0.160152 2.41762 -0.00364104 2.01214 6.14297e-05 1.59126C0.0037639 1.17038 0.174666 0.767774 0.475957 0.470155C0.777249 0.172536 1.18482 0.00371802 1.6109 6.06812e-05C2.03697 -0.00359666 2.44745 0.158199 2.75394 0.450601L8.5 6.12502L14.2461 0.450601C14.5525 0.158199 14.963 -0.00359666 15.3891 6.06812e-05C15.8152 0.00371802 16.2227 0.172536 16.524 0.470155C16.8253 0.767774 16.9962 1.17038 16.9999 1.59126C17.0036 2.01214 16.8398 2.41762 16.5438 2.72037L9.64889 9.52967C9.49818 9.67895 9.31911 9.79735 9.12195 9.87807C8.92479 9.95878 8.71342 10.0002 8.5 10Z'
                        fill='#02111B'
                      />
                    </svg>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Soar into popularity within VVSLikes, feeling as light as air
                  while your engagement takes off to new heights, while you get
                  back to focusing on creating. VVS helps maintenance free.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {location === '/faq' && (
            <div style={{ marginTop: '50px', marginBottom: '80px' }}>
              <a
                style={{ fontSize: '18px', fontWeight: '500' }}
                href='ask-any-question'
              >
                Ask Any Question?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Faq;
