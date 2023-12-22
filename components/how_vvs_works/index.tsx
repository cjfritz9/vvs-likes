import { Card } from 'react-bootstrap';
import frame1Img from '../../assets/images/frame-1.png';
import frame2Img from '../../assets/images/frame-2.png';
import frame3Img from '../../assets/images/frame-3.png';
import Image from 'next/image';

const HowVvsWorks = () => {
  return (
    <>
      <div
        style={{ margin: '80px 0px', background: '#F6F9FB' }}
        className='have_likes'
      >
        <div className='container w-100'>
          <div className='row add_padding'>
            <div
              style={{
                borderRadius: '10px'
              }}
            >
              <div>
                <h4
                  className='text-center'
                  style={{
                    fontWeight: '600',
                    marginBottom: '30px',
                    fontSize: '36px'
                  }}
                >
                  How VVSLikes Works
                </h4>
                <div className='row text-center'>
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <Card
                      style={{
                        // width: "18rem",
                        border: '2px solid #c7d7f0',
                        padding: '24px',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        style={{ height: '80px', width: '80px' }}
                        alt={'frame-1'}
                        src={frame1Img}
                      />
                      <Card.Body>
                        <Card.Title>Enter Details</Card.Title>
                        <Card.Text>
                          It can be as easy as filling your Email and Instagram
                          Username and selecting the service that best fits your
                          needs.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <Card style={{ border: '2px solid #c7d7f0' }}>
                      <Image
                        style={{ height: '80px', width: '80px' }}
                        alt={'frame-2'}
                        src={frame2Img}
                      />
                      <Card.Body>
                        <Card.Title>Get Likes</Card.Title>
                        <Card.Text>
                          Now you can relax and watch as real VVSlikes pour in
                          within minutes by real pages with stories and all.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <Card style={{ border: '2px solid #c7d7f0' }}>
                      <Image
                        style={{ height: '80px', width: '80px' }}
                        alt={'frame-3'}
                        src={frame3Img}
                      />
                      <Card.Body>
                        <Card.Title>24/7 Support</Card.Title>
                        <Card.Text>
                          You should be happy now, but if anything ever looks
                          fishy, we need to know and we are here to listen 24/7.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowVvsWorks;
