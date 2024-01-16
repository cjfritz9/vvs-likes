import { Card } from 'react-bootstrap';
import fasterOrder from '../../assets/svg/faster_order.svg';
import heart from '../../assets/svg/heart.svg';
import satisfaction from '../../assets/svg/satisfaction.svg';
import Image from 'next/image';

const data = [
  {
    img: fasterOrder,
    heading: 'Instant Delivery',
    content:
      'The world moves fast, and Instagram seems to move even faster. Once you order our process begins, and the likes start to appear.'
  },
  {
    img: heart,
    heading: 'Real Likes',
    content:
      'Our growth network uses real people to deliver real likes. We use zero bots in the delivery of our service.'
  },
  {
    img: satisfaction,
    heading: 'Competitive Pricing',
    content:
      "Growing your Instagram account shouldn't break the bank so our service won't either. Our prices are designed to be affordable. "
  }
];

const WhyChooseUs = () => {
  return (
    <>
      <div style={{ background: '#0D57C6' }}>
        <div className='container text-center'>
          <div className='row'>
            <div className='bg-white vvsbenefit who_block'>
              <div className='get-started_blockq'>
                <div className='text_wide_range'>
                  <div className='text_wide'>
                    <h4 style={{ fontSize: '36px', fontWeight: 'bold' }}>
                      Why Choose Us
                    </h4>
                    <p>
                      Our active network of real Instagram users guarantees a
                      higher standard, VVSLikes. Join thousands and try 10 to 50
                      real Instagram likes while offers last to get started on
                      your growth path to authentic and true engagement.
                    </p>
                  </div>
                </div>
                {/* <div style={{marginTop:"30px"}}></div> */}
                <div className='row' style={{ marginTop: '30px' }}>
                  {data.map((item, i) => {
                    return (
                      <div className='col-sm-12 col-md-6 col-lg-4' key={i}>
                        <Card
                          className='choose-card '
                          style={{
                            padding: '24px',
                            background: '#F6F9FB',
                            border: 'none',
                            borderRadius: '10px'
                          }}
                        >
                          <Image
                            style={{ height: '50px', width: '50px' }}
                            alt={'frame-1'}
                            src={item.img}
                          />
                          <Card.Body>
                            <Card.Title
                              as='p'
                              style={{
                                color: '#02111B',
                                fontWeight: '700',
                                fontSize: '20px'
                              }}
                            >
                              {item.heading}
                            </Card.Title>
                            <Card.Text>{item.content}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
