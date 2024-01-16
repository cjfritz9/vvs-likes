// 'use client';

import { useState } from 'react';
import DetailsAboutInstagramLikes from '@/components/details_about_instagram_likes';
import HowVvsWorks from '@/components/how_vvs_works';
import ThankYouModal from '@/components/modal/thank_you_modal';
import OurMethod from '@/components/our_method';
import TrustedByPeople from '@/components/trusted_by_people';
import VvsLikesPricing from '@/components/vvs_likes_pricing';
import VvsLikesBenefit from '@/components/vvslikes_benefit';
import WhyChooseUs from '@/components/why_choose_us';
import Faq from '@/components/faq';
import PackageDetailsModal from '@/components/modal/package_details_modal';
import '@/styles/home.css';
import SelectYourPostModal from '@/components/selectYourPostModal/SelectYourPostModal';
import WebsiteTimerAutoAndBuy from '@/components/websiteTimerAutoAndBuy/WebsiteTimerAutoAndBuy';
import '@/styles/blog_details.css';
import '@/styles/blogcards.css';
import InstaPostModal from '@/components/modal/insta_posts_modal';
import { notFound, usePathname } from 'next/navigation';
import Head from 'next/head';
// import useIsClient from '@/lib/hooks/useIsClient';

// import blog_img1 from "../../assets/images/blog_img1.png";
// import blog_img2 from "../../assets/images/blog_img2.png";
// import blog_img3 from "../../assets/images/blog_img3.png";
// import author_profilepic from "../../assets/images/author_profilepic.png";
// import Blogcards from "../../components/blogCard/Blogcards";

export default function BuyAutomaticInstagramLikesPage() {
  // const [isSelectPostModal, setIsSelectPostModal] = useState(false);
  // const [isWebsiteTimerModal, setIsWebsiteTimerModal] = useState(false);
  // const [isThankYouModal, setIsThankYouModal] = useState(false);
  // const [isPackageDetailsModal, setIsPackageDetailsModal] = useState(false);
  // const [isInstaPost, setIsInstaPost] = useState(false);
  // const [userData, setUserData] = useState();
  // const [selectedImage, setSelectedImage] = useState({ code: '', id: '' });
  // const location = usePathname();

  // const { isClient } = useIsClient();
  // if (!isClient) {
  //   return null;
  // }

  // Leaving this code in case anyone changes their mind again
  return notFound();

  // return (
  //   <>
  //     <Head>
  //       <link
  //         rel='alternate'
  //         hrefLang='en-US'
  //         href='https://vvslikes.com/en/buy-instagram-likes-free-trial'
  //       />
  //     </Head>
  //     <>
  //       <DetailsAboutInstagramLikes
  //         setIsSelectPostModal={setIsSelectPostModal}
  //         setUserData={setUserData}
  //       />
  //       <OurMethod />
  //       <HowVvsWorks />
  //       <TrustedByPeople />
  //       <VvsLikesBenefit />
  //       <WhyChooseUs />
  //       <VvsLikesPricing />
  //       <div
  //         style={{
  //           backgroundColor: location !== '/faq' ? '#F6F9FB' : '#F6F9FB'
  //         }}
  //       >
  //         <Faq />
  //       </div>

  //       {/* <div className="featured-in-blog-section">
  //         <div className="container">
  //           <div className="featured-in-blog-section-title">
  //             <h1>Featured in Blog</h1>
  //             <p>
  //               Do you want even more tactics and techniques to grow your
  //               Instagram if so check out our blog which is packed with helpful
  //               information.
  //             </p>
  //           </div>

  //           <div className="featured-in-blog-section-content">
  //             <div className="row">
  //               <Blogcards
  //                 img={blog_img1}
  //                 type="instagram"
  //                 date="Aug 30,2023"
  //                 blogHeader="How To Get Instagram Likes Without Hashtag"
  //                 blogDescription="In 2007, the first hashtag was used on a Twitter post. Ten years later, hashtags have been introduced on every major social m..."
  //                 authorProfilePic={author_profilepic}
  //                 authorName="Prof. Betty Howell V"
  //               />
  //               <Blogcards
  //                 img={blog_img2}
  //                 type="instagram"
  //                 date="Aug 30,2023"
  //                 blogHeader="How To Get Instagram Verified"
  //                 blogDescription="Getting verified on Instagram is the biggest free promotional opportunity the popular app hands out. The blue check mark so..."
  //                 authorProfilePic={author_profilepic}
  //                 authorName="Prof. Betty Howell V"
  //               />
  //               <Blogcards
  //                 img={blog_img3}
  //                 type="instagram"
  //                 date="Aug 30,2023"
  //                 blogHeader="Understanding the Importance of Instagram Likes"
  //                 blogDescription="Explanation of how likes contribute to visibility and engagement. Insights into how they impact your profile's algorithmic rank.."
  //                 authorProfilePic={author_profilepic}
  //                 authorName="Lillie Kessler MD"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div> */}
  //     </>
  //     <>
  //       <SelectYourPostModal
  //         userData={userData}
  //         show={isSelectPostModal}
  //         onHide={() => setIsSelectPostModal(false)}
  //         setIsSelectPostModal={setIsSelectPostModal}
  //         setIsWebsiteTimerModal={setIsWebsiteTimerModal}
  //         selectedImage={selectedImage}
  //         setSelectedImage={setSelectedImage}
  //       />

  //       <WebsiteTimerAutoAndBuy
  //         show={isWebsiteTimerModal}
  //         onHide={() => setIsWebsiteTimerModal(false)}
  //         setIsWebsiteTimerModal={setIsWebsiteTimerModal}
  //         setIsThankYouModal={setIsThankYouModal}
  //         isWebsiteTimerModal={isWebsiteTimerModal}
  //         selectedImage={selectedImage}
  //         setSelectedImage={setSelectedImage}
  //       />

  //       <ThankYouModal
  //         show={isThankYouModal}
  //         onHide={() => setIsThankYouModal(false)}
  //         setIsPackageDetailsModal={setIsPackageDetailsModal}
  //         setIsThankYouModal={setIsThankYouModal}
  //       />

  //       <PackageDetailsModal
  //         show={isPackageDetailsModal}
  //         onHide={() => setIsPackageDetailsModal(false)}
  //         setIsPackageDetailsModal={setIsPackageDetailsModal}
  //         setIsInstaPost={setIsInstaPost}
  //       />

  //       <InstaPostModal
  //         show={isInstaPost}
  //         onHide={() => setIsInstaPost(false)}
  //         setIsInstaPost={setIsInstaPost}
  //       />
  //     </>
  //   </>
  // );
}
