import '@/styles/terms.css';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div
            className='col bg-white text-start terms-content'
            style={{
              marginTop: '80px',
              marginBottom: '80px'
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: '600',
                  color: '#02111B',
                  marginBottom: 0
                }}
              >
                Privacy Policy
              </h1>
              <small>Updated as of November 2023</small>
              <p
                className='fw-normal'
                style={{
                  marginTop: '8px',
                  lineHeight: '28px',
                  color: '#6B7175',
                  fontSize: '16px'
                }}
              >
                Welcome to VVSLikes.com, Operated by V3S LLC
              </p>
              <p
                className='fw-normal'
                style={{
                  lineHeight: '28px',
                  color: '#6B7175',
                  fontSize: '16px'
                }}
              >
                Hello there! At VVSLikes.com, we're not just about boosting your
                online presence; we're also big on respecting and protecting
                your privacy. This document isn't just a set of rules – it's our
                commitment to you, our valued user. So, grab a cup of coffee,
                and let's walk through this together, shall we?
              </p>
              <ol>
                <li style={{ fontWeight: 600 }}>Our Promise to You:</li>
                <p>
                  Your Privacy is a Top Priority: Your personal information is
                  like a secret recipe – it needs to be guarded. We use it
                  solely to enhance your experience with us and nothing more.
                </p>
                <li style={{ fontWeight: 600 }}>The Story of Your Data:</li>
                <p>
                  Collecting the Bits and Pieces: Just like collecting seashells
                  on a beach, we gather some information from you. This includes
                  details you provide when you sign up and bits we get through
                  technology like cookies. But don't worry, we're careful
                  collectors.
                </p>
                <p>
                  The 'Why' Behind the Collection: Think of this as the plot of
                  our story. We collect data to make our services better for
                  you, from optimizing your experience to keeping our platform
                  safe.
                </p>
                <li style={{ fontWeight: 600 }}>A Journey with Cookies:</li>
                <p>
                  What's in a Cookie?: No, not the chocolate chip kind! These
                  digital cookies help us remember your preferences, making your
                  experience smoother and more personalized.
                </p>
                <li style={{ fontWeight: 600 }}>
                  The Supporting Characters; Third-Parties:
                </li>
                <p>
                  Partners in Our Tale: Sometimes, we team up with other
                  companies for things like analyzing how our services are used
                  (hello, Google Analytics!) or processing payments. But fear
                  not, they're bound by the same privacy promises we make to
                  you.
                </p>
                <li style={{ fontWeight: 600 }}>
                  The Plot Twist; Using Your Information:
                </li>
                <p>
                  No Secrets Here: We use your data to provide our services,
                  keep our digital world spinning, and occasionally, for a bit
                  of legal stuff. But we always keep your best interests at
                  heart.
                </p>
                <li style={{ fontWeight: 600 }}>
                  Your Rights; The Hero of Our Story:
                </li>
                <p>
                  You're in Control: Just like a hero in a novel, you have the
                  power. You can access your data, ask us to change or delete
                  it, and even say "no thanks" to some cookies.
                </p>
                <li style={{ fontWeight: 600 }}>Keeping Your Data Safe:</li>
                <p>
                  Our Digital Fortress: We protect your data like it's a
                  treasure. We use nifty technology to keep it safe from digital
                  pirates and other internet nasties.
                </p>
                <li style={{ fontWeight: 600 }}>Changes to Our Story:</li>
                <p>
                  Our Ever-Evolving Tale: Just like any good story, ours might
                  change over time. If we update this policy, we'll let you know
                  – think of it as a new chapter.
                </p>
                <li style={{ fontWeight: 600 }}>
                  The Finale; Your Part in Our Journey:
                </li>
                <p>
                  By Using Our Services: You're agreeing to this story we've
                  shared. It's a partnership, and we're thrilled to have you
                  aboard.
                </p>
                <li style={{ fontWeight: 600 }}>Need to Chat?:</li>
                <p>
                  Contact Us: Got questions or need to talk about your data?
                  Drop us a line at{' '}
                  <Link href='mailto:support@vvslikes.com' target='_blank'>
                    support@vvslikes.com
                  </Link>
                  . We're here to help!
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
