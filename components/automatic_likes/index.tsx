import AutomaticLikesPackage from "./automatic_likes_package";
import HowVvsWorks from "../../components/how_vvs_works";
import Faq from "../faq";
import TrustedByPeople from "../../components/trusted_by_people";
import giftBox from "../../assets/images/gift-box.png";
import bell from "../../assets/images/bell.png";
import "../../styles/automatic-likes.css";
import Image from "next/image";

const AutomaticLikes = () => {
  return (
    <>
      <div
        className="automatic-likes"
        style={{ backgroundColor: "rgb(13, 87, 198)", padding: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="bg-white spacing_likes"
              style={{
                borderRadius: "10px",
              }}
            >
              <div className="insta_posts_outer">
                <div className="automatic-likes-heading">
                  <h1>
                    Never Wait. Get Automatic Likes for Every New Post with
                    VVSLikes Pro
                  </h1>
                  <p>Members unlock exclusive benefits and rewards</p>
                </div>
                <div>
                  {/* <h2></h2>
                  <h2></h2>
                  <h2></h2> */}
                </div>
                <AutomaticLikesPackage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowVvsWorks />
      <Faq />
      <TrustedByPeople />

      <div
        className="experience-likes"
        style={{ backgroundColor: "rgb(13, 87, 198)", padding: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="bg-white spacing_likes"
              style={{
                borderRadius: "10px",
              }}
            >
              <div className="insta_posts_outer">
                <div className="gift-box">
                  <Image src={giftBox} alt={"gift-box"} />
                </div>
                <div className="bell">
                  <Image src={bell} alt={"bell"} />
                </div>
                <div>
                  <h2>Experience Free Likes </h2>
                  <p>
                    After you get 10 likes at no charge,{" "}
                    <span className="fw-bold">refresh every 24 hrs.</span> For a
                    limited time all VVSlikes users can redeem the 10 likes on
                    us. Use it once or come back every 24 hours to redeem even
                    more likes.
                  </p>
                </div>
                <div className="experience-form">
                  <div
                    className="experience-form-cntnt"
                    style={{ padding: "50px" }}
                  >
                    <div className="name-field">
                      <label
                        className="form-label d-flex"
                        style={{ color: "#02111B" }}
                      >
                        User name:
                      </label>
                      <input
                        style={{ width: "97%" }}
                        type="text"
                        className="form-control"
                        placeholder="Your Instagram username "
                      />
                    </div>
                    <div className="mail-field">
                      <label
                        className="form-label d-flex"
                        style={{ color: "#02111B" }}
                      >
                        Email:
                      </label>
                      <input
                        style={{ width: "97%" }}
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <button
                      className="btn text-white"
                      style={{
                        background: "#FF3E6C",
                        height: " 50px",
                        fontWeight: "700",
                        borderRadius: "50px",
                      }}
                      type="button"
                    >
                      Get Free Instagram Like
                    </button>
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
export default AutomaticLikes;
