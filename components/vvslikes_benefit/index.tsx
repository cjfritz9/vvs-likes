import { Card } from "react-bootstrap";
import trialLikes from "../../assets/images/trial-likes.png";
import freeLikes from "../../assets/images/free-likes.png";
import thumbLikes from "../../assets/images/thumb-like.png";
import eyeImg from "../../assets/images/eye.png";
import dropRate from "../../assets/images/drop-rate.png";
import satisfaction from "../../assets/images/satisfaction.png";
import video from "../../assets/images/video.png";
import fasterOrder from "../../assets/images/faster-order.png";
import support from "../../assets/images/support.png";
import Image from "next/image";

const details = [
  { icon: eyeImg, title: "Free Instagram Likes" },
  { icon: trialLikes, title: "No App Download" },
  { icon: eyeImg, title: "Free Instagram Views" },
  { icon: eyeImg, title: "100% Human Likes" },
  { icon: dropRate, title: "Zero Drop Rate" },
  { icon: satisfaction, title: "Satisfaction Guarantee" },
  { icon: video, title: "Works For Videos" },
  { icon: fasterOrder, title: "Super Fast Order Processing" },
  { icon: support, title: "Professional Support" },
  { icon: trialLikes, title: "No Surveys" },
  { icon: freeLikes, title: "No Verification " },
  { icon: thumbLikes, title: "No Credit Card (Trials)" },
];

const VvsLikesBenefit = () => {
  return (
    <>
      <div style={{ margin: "0px 0px", background: "#F6F9FB" }}>
        <div className="container w-100 vvsbenefit">
          <div className="row" style={{ padding: "80px 0px" }}>
            <div
              style={{
                borderRadius: "10px",
              }}
            >
              <div>
                <h4
                  className="text-center"
                  style={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "rgb(2, 17, 27)",
                  }}
                >
                  Benefits Of VVSLikes
                </h4>
                <p
                  className="text-center"
                  style={{
                    color: "#6B7175",
                  }}
                >
                  Imagine VVSLikes as a super booster for your Instagram growth
                  plan. We made this tool because we know it can be hard to
                  spend lots of time making pictures and posts, hoping people
                  will like and follow you. When you put that new post up,
                  that's when the excitement starts!
                </p>
                <div
                  className="row"
                  // className="d-flex justify-content-between"
                >
                  {details.map((item, i) => {
                    return (
                      <div className="col-sm-12 col-md-6 col-lg-4" key={i}>
                        <Card
                          className="w-100"
                          style={{
                            border: "2px solid #c7d7f0",
                            // width: "370px",
                            // height: "60px",
                            borderRadius: "10px",
                            gap: "10px",
                            padding: "10px 24px",
                            textAlign: "left",
                            alignItems: "flex-start",
                          }}
                        >
                          <Card.Body
                            className="d-flex"
                            style={{
                              padding: "0",
                              alignItems: "flex-end",
                              marginBottom: "0",
                              gap: "12px",
                            }}
                          >
                            <Image src={item.icon} alt="likes-img" />
                            <Card.Title
                              style={{ fontWeight: "600", fontSize: "18px" }}
                            >
                              {item.title}
                            </Card.Title>
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
export default VvsLikesBenefit;
