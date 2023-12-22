const VvsLikesPricing = () => {
  const leftArray = [
    { label: 'Instant likes (starts and delivers in minutes)' },
    { label: 'Works for Views (Videos will get likes and views)' },
    { label: 'Real Likes (real human accounts)' },
    { label: 'Satisfaction guarantee Email Support' },
    { label: 'Zero Drop Rate (drop warranty)' },
    { label: 'Matching Views (same amount of views as likes)' }
  ];
  const rightArray = [
    { label: 'Auto likes on Every New Post  (delivers in minutes)' },
    { label: 'Works for Views (Videos will get likes and views)' },
    { label: 'Real Likes (real human accounts)' },
    { label: 'Satisfaction guarantee Email support ' },
    { label: 'Zero Drop Rate (drop warranty) ' },
    { label: 'Matching Views (same amount of views as likes)' },
    { label: 'Randomized Likes (more natural delivery)' },
    { label: 'Country Targeting (likes from a country of your choice)' },
    { label: 'Professional Support (Contact us any time)' }
  ];
  return (
    <div className='pricing_wrap'>
      <div className='container' style={{ paddingTop: '80px 0px' }}>
        <div className='vvpricing_header'>
          <h4
            className='text-center'
            style={{ fontWeight: 'bold', fontSize: '36px;' }}
          >
            VVS Likes pricing
          </h4>
          <p className='text-center'>
            {' '}
            Within minutes, receive real Instagram likes safely delivered with
            just a few clicks. See your options below.
          </p>
        </div>
        <div className='row' style={{ marginTop: '50px' }}>
          <div className='col-md-6'>
            <div className='box_pricing'>
              <div className='text-center'>
                <h4 style={{ fontWeight: 'bold' }}>Why VVS Likes?</h4>
                <h3>Real Likes</h3>
                <p>Come back every day for up to 50 free likes</p>
              </div>
              <div>
                {leftArray.map((item, i) => {
                  return (
                    <div
                      className='form-check form-check-inline d-flex justify-content-center aligin-item-start'
                      key={i}
                    >
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='20' height='20' rx='10' fill='#0D57C6' />
                          <path
                            d='M14 7L8.5 12.5L6 10'
                            stroke='white'
                            strokeWidth='2.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <label
                        className='form-check-label'
                        htmlFor='inlineCheckbox1'
                      >
                        {item.label}
                      </label>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <button
                    className='btn text-white'
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '16px',
                      textAlign: 'center',
                      backgroundColor: '#FF3E6C',
                      borderRadius: '50px',
                      width: '135px',
                      height: ' 50px',
                      marginTop: '34px'
                    }}
                    type='button'
                  >
                    Try Real Likes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='box_pricing'>
              <div className='text-center'>
                <h4 style={{ fontWeight: 'bold' }}>Why VVS Likes Pro?</h4>
                <h3>Automatic Real likes</h3>
                <p>Membership Packages Come with Gifts!</p>
              </div>
              <div>
                {rightArray.map((item, i) => {
                  return (
                    <div
                      className='form-check form-check-inline d-flex justify-content-start aligin-item-start'
                      key={i}
                    >
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='20' height='20' rx='10' fill='#0D57C6' />
                          <path
                            d='M14 7L8.5 12.5L6 10'
                            stroke='white'
                            strokeWidth='2.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <label
                        className='form-check-label'
                        htmlFor='inlineCheckbox1'
                      >
                        {item.label}
                      </label>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <button
                    className='btn text-white'
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      backgroundColor: '#FF3E6C',
                      borderRadius: '50px',
                      width: '194px',
                      height: ' 50px',
                      marginTop: '34px'
                    }}
                    type='button'
                  >
                    Explore Pro Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VvsLikesPricing;
