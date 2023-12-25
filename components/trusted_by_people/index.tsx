import { Card } from 'react-bootstrap';
import userImg from '../../assets/images/user-img.png';
import WomanTestimonial1 from '../../assets/images/testimonial_woman_1.png';
import WomanTestimonial2 from '../../assets/images/testimonial_woman_2.png';
import ManTestimonial1 from '../../assets/images/testimonial_man_1.png';
import ManTestimonial4 from '../../assets/images/testimonial_man_4.jpg';
import ManTestimonial5 from '../../assets/images/testimonial_man_5.jpg';
import Image from 'next/image';

const TrustedByPeople = () => {
  const location = window.location.pathname;
  const userDetails: {
    img: string;
    name: string;
    content: string;
    time: string;
  }[] = [
    {
      img: userImg.src,
      name: 'Zain BE.',
      content:
        "“It was incredible how in-credible it was :( My posts were only receiving a few likes even though I had about 1000 followers I was getting no leads. I don't think anybody was even looking at my posts. As almost a last resort I opted to get 250 likes per post automatically with VVS and I have seen my engagement go crazy. People actually comment on my post now and DM me as if I'm some sort of expert. It's wild :)”",
      time: '20:06 PM - June 01, 2022'
    },
    {
      img: ManTestimonial1.src,
      name: 'David M.',
      content:
        "“tbh seemed like IG didn't even respect my posts that I was sponsoring until I gave them some juice w/ vvs likes. I guess it makes sense though nobody clicks on a sponsored post that's only getting a few likes.”",
      time: '20:06 PM - June 01, 2022'
    },
    {
      img: WomanTestimonial1.src,
      name: 'Elizabeth T.',
      content:
        "“I needed Help... I had been trying to make one of my reels go viral for weeks posting daily with new variation of #'s and text and guess what tipped the needle in? Only 500 and VVS Likes showed Instagram that this is worth showing to thousands, and going viral. That post has over 1 million views and over 10k likes and I get so many comments and DMs that I can't respond to everybody by myself. Now I need a new kinda help”",
      time: '20:06 PM - June 01, 2022'
    },
    {
      img: ManTestimonial4.src,
      name: 'Christopher G.',
      content:
        '“I have honestly taken a look at a bunch of these sites and bought likes for marketing for over 10 years. VVSlikes has hands down highest quality pages, 90% of which with stories, and all of them have real people behind them. I even messaged a few just to make sure, and they did respond.”',
      time: '20:06 PM - June 01, 2022'
    },
    {
      img: WomanTestimonial2.src,
      name: 'Amanda A.',
      content:
        '“As a jeweler I never buy anything less than a VVS Diamond for my clients that need the best. I will never buy anything less than a VVS Like because they are the best”',
      time: '20:06 PM - June 01, 2022'
    },
    {
      img: ManTestimonial5.src,
      name: 'Matthew Th.',
      content:
        "“If someone had told me, I was only one viral post away from quitting my job, I would've called him a scam but now I'm happily jobless and can do whatever I want. VVS Gave me the boost I needed to go viral.”",
      time: '20:06 PM - June 01, 2022'
    }
  ];

  const detailArray =
    location === '/automatic-likes' ? userDetails.slice(0, 3) : userDetails;

  return (
    <>
      <div className='container' style={{ paddingBottom: '80px' }}>
        <div className='row'>
          <div>
            <h3
              className='text-center'
              style={{ fontSize: '36px', fontWeight: '600', color: '#02111B' }}
            >
              Trusted by 15,000+ people
            </h3>
            <div className='row' style={{ marginTop: '64px' }}>
              {detailArray.map((detail, i) => {
                return (
                  <div className='col-sm-12 col-md-6 col-lg-4' key={i}>
                    <Card
                      className='w-100'
                      style={{
                        border: 'none',
                        padding: '24px',
                        textAlign: 'left',
                        alignItems: 'normal'
                      }}
                    >
                      <Card.Header
                        className='d-flex'
                        style={{
                          borderBottom: 'none',
                          backgroundColor: 'transparent',
                          padding: '0',
                          display: 'flex',
                          gap: '16px',
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          src={detail.img}
                          alt='user'
                          style={{
                            borderRadius: '50px',
                            height: '60px',
                            width: '60px'
                          }}
                          height={60}
                          width={60}
                        />
                        <div>
                          <h2
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: '#02111B',
                              marginBottom: '0'
                            }}
                          >
                            {detail.name}
                          </h2>
                        </div>
                      </Card.Header>

                      <Card.Body
                        style={{
                          padding: '16px 0 0'
                        }}
                      >
                        <Card.Text>{detail.content}</Card.Text>
                        {/* <p
                          style={{
                            padding: "0",
                            textAlign: "start",
                            color: "#6B7175",
                            marginBottom: "0",
                          }}
                        >
                          {detail.time}
                        </p> */}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrustedByPeople;
