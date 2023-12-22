import packageImg from '../../assets/images/our-method-package.png';
import enterDetailImg from '../../assets/images/enter-detail.png';
import reactNewHighs from '../../assets/images/new-highs.png';
import Image from 'next/image';
const OurMethod = () => {
  return (
    <div
      className='padding_bottom mobile_padding'
      style={{ background: '#0D57C6' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='bg-white get-started_block'>
            <div className='text-center'>
              <h4
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#02111B'
                }}
              >
                Our Method
              </h4>
              <p
                style={{
                  lineHeight: '28px',
                  color: '#6B7175',
                  padding: '0px 0px'
                }}
              >
                Many hesitate to engage with Instagram pages that don't seem
                active or popular.
                <br /> Yet When You Make a new Connection, or find a new viral
                post, you know the algorithm did its job.
              </p>
            </div>
            <div style={{ marginTop: '64px' }}>
              <div className='row align-items-center mb-5 column-reverse-method'>
                <div className='col-md-6 text-start'>
                  <h4
                    style={{
                      fontSize: '36px',
                      fontWeight: '600'
                    }}
                  >
                    Select VVSLikes Package
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7175'
                    }}
                  >
                    Discover the joy that 50 to 10,000 real Instagram likes can
                    bring to your page, what could that do for you?
                  </p>
                </div>
                <div className='col-md-6'>
                  <Image
                    style={{ maxWidth: '360px', height: 'auto', width: '100%' }}
                    alt={'package-img'}
                    src={packageImg}
                  />
                </div>
              </div>
              <div
                className='row align-items-center mb-5 column-method'
                style={{ marginBottom: '50px' }}
              >
                <div className='col-md-6'>
                  <Image
                    style={{ maxWidth: '360px', height: 'auto', width: '100%' }}
                    alt={'package-img'}
                    src={enterDetailImg}
                  />
                </div>
                <div className='col-md-6 text-start'>
                  <h4
                    style={{
                      fontSize: '36px',
                      fontWeight: '600'
                    }}
                  >
                    Enter Your Details
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7175'
                    }}
                  >
                    An Instagram username and valid email is all you need to
                    join the thousands in our growing community who get VVSLikes
                    every day.
                  </p>
                </div>
              </div>
              <div className='row align-items-center mb-5 column-reverse-method'>
                <div className='col-md-6 text-start'>
                  <h4
                    style={{
                      fontSize: '36px',
                      fontWeight: '600'
                    }}
                  >
                    Reach New Highs
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7175'
                    }}
                  >
                    Now you have the time to get back to what truly matters,
                    creating good content, while we work our magic to get you in
                    front of the masses.
                  </p>
                </div>
                <div className='col-md-6'>
                  <Image
                    alt={'new-highs'}
                    style={{ maxWidth: '335px', height: 'auto', width: '100%' }}
                    src={reactNewHighs}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurMethod;
