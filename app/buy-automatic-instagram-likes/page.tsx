'use client';

import "@/styles/freeAutomaticLikes.css";
import AutomaticLikesPackage from "@/components/automatic_likes/automatic_likes_package";

const FreeAutomaticLikesPage = () => {
  return (
    <>
      <div className="free-automatic-likes">
        <div className="free-automatic-likes-wrapper">
          <div className="free-automatic-likes-content">
            <div className="subscriptionPlanTable-header">
              <div className="member-offer">
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "48px",
                    height: "40px",
                    padding: " 14px",
                    borderRadius: "10px",
                    gap: "10px",
                    backgroundColor: "#0DC6BB",
                    color: "white",
                  }}
                >
                  187
                </span>{" "}
                <p>Pro user have upgraded during checking out</p>
              </div>
              <h1>Exclusive New Member Offer: Free Automatic Likes (7 Days)</h1>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Never wait to get likes on your new posts again. Upgrade to VVS
                Pro{" "}
              </p>
            </div>

            <div className="subscriptionPlanTable-mainContent">
              <AutomaticLikesPackage />
              {/* <div className="paswrd-section">
                <div className="pswrd-feild mb-3">
                  <label className="form-label d-flex">Password:</label>
                  <input name="password" type="text" className="form-control" />
                </div>
                <div className="activate-pro d-flex justify-content-end">
                  <button
                    className="btn text-white"
                    style={{
                      width: "216px",
                      height: "50px",
                      padding: "17px, 44px, 17px, 44px",
                      borderRadius: "25px",
                      gap: "10px",
                      background: "#FF3E6C",

                      fontWeight: "700",
                    }}
                  >
                    Acctivate Pro
                  </button>
                  <a>Continue, Refuse Deal for Now...</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreeAutomaticLikesPage;
