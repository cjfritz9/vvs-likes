import React from 'react';
import './styles.css';

const AboutUsPage: React.FC = () => {
  return (
    <div style={{
      textAlign: 'center',

      background: '#0D57C6'
    }}>
      <div className='container'>
        <div className='row'>
          <div
            className='col bg-white about'
            style={{
              width: '1240px',
              borderRadius: '10px',
              padding: '81px 91px 81px 110px',
              marginTop: '80px'
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '36px',
                  fontWeight: '600'
                }}
              >
                About
              </h1>
              <p
                style={{
                  lineHeight: '28px',
                  color: '#6B7175',
                  padding: '0px 220px'
                }}
              >
                Our company specializes in providing Instagram growth services
                for followers, likes, and views. Our services are designed to
                help businesses increase their reach and engagement on the
                platform .
              </p>
            </div>

            <div
              className='col bg-white why-vv'
              style={{
                padding: '40px 180px',
                border: '1px solid #0d57c6',
                borderRadius: '10px',
                lineHeight: '28px',
                marginTop: '60px'
              }}
            >
              <h1 style={{ fontWeight: '600' }}>Why VVSlikes?</h1>
              <p>
                Our company specializes in providing Instagram growth services
                for followers, likes, and views. Our services are designed to
                help businesses increase their reach and engagement on the
                platform, and achieve their marketing goals. Our CEO is
                passionate about customer satisfaction and leads a team of
                skilled marketers and robust support staff, who work together to
                deliver the best results for our clients.
              </p>
              <p>
                With their combined knowledge and experience, we are able to
                provide personalized, effective and efficient services that help
                our clients to grow their brand on Instagram. We strive to
                exceed our clients' expectations and provide them with the
                support they need to succeed on the platform.
              </p>
              <p>
                {' '}
                VVSlike has seen a 94% growth spike & spectacular retention rate
                in the past year, thanks to our reputation for providing
                top-notch service and delivering results for our clients.
              </p>
            </div>

            <div
              className='col bg-white mission'
              style={{
                padding: '40px 180px',
                border: '1px solid #0d57c6',
                borderRadius: '10px',
                lineHeight: '28px',
                marginTop: '60px'
              }}
            >
              <h1>Mission: Real Likes</h1>
              <p>
                Our mission is to empower individuals & businesses of all sizes
                to unlock their full potential on Instagram by providing expert
                growth strategies, unparalleled support, and effective solutions
                for increasing followers, likes, and views. We strive to create
                lasting impact for our clients by helping them build a dedicated
                and engaged audience on the platform, boost their brand
                visibility and credibility, and drive meaningful results for
                their business.
              </p>
              <p>
                VVSlike is known for going above and beyond for our clients,
                consistently delivering outstanding results and providing
                exceptional service that exceeds their expectations. We are
                proud to have built a reputation for excellence and reliability,
                and we are dedicated to maintaining our high standards of
                quality and integrity in all that we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
