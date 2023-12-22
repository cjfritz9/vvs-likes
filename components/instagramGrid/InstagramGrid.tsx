import Image from "next/image";
import "../../styles/InstagramGrid.css";
import { IFreeTrial } from "../details_about_instagram_likes/real_instagram_likes";

interface IProps {
  userDetail?: IFreeTrial;
  selectedImage?: any;
  setSelectedImage?: any;
  setIsSelectPostModal?: any;
  setIsWebsiteTimerModal?: any;
}

const formatFollowerCount = (count?: number) => {
  if (typeof count !== "number") return "N/A";

  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  } else {
    return count.toString();
  }
};

const InstagramGrid = (props: IProps) => {
  const userDetail = props?.userDetail?.userData;
  const instagramPosts = props?.userDetail?.instagramPosts;
  const instaProfile = props?.userDetail?.instaProfile; // TODO
  const selectedImage = props?.selectedImage;
  const setSelectedImage = props?.setSelectedImage;

  const handleSelected = (code: any, id: any) => {
    setSelectedImage({ ...selectedImage, code: code, id: id }); // TODO - not sure why id is needed
  };

  return (
    <div className="instagram-grid">
      <div className="instagram-grid-item">
        <div className="instagram-grid-item-header">
          <h2>Select Your Post:</h2>
          <p>You will start to see likes instantly.</p>
        </div>

        <div key={instaProfile?.pk} className="instagram-grid-item-content">
          <div className="title">{instaProfile?.username}</div>
          <div className="instagram-grid-item-image">
            <Image
              style={{
                height: " 80px",
                width: "80px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={instaProfile?.profile_pic_url}
              alt={instaProfile?.username}
            />
            <div className="instagram-grid-post-followers-following">
              <div className="posts">
                <h4>{instagramPosts?.length || 0}</h4>
                <p>{`Post${(instagramPosts?.length || 0) === 1 ? "" : "s"}`}</p>
              </div>
              <div className="followers">
                <h4>{formatFollowerCount(instaProfile?.follower_count)}</h4>
                <p>Followers</p>
              </div>
              <div className="following">
                <h4>{instaProfile?.following_count}</h4>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>

        <div className="custom_wrap">
          <div className="content">
            {instagramPosts?.map((data) => {
              return (
                <>
                  <Image
                    onClick={() => handleSelected(data.code, userDetail?.id)}
                    src={data.image_versions2.candidates[0].url}
                    alt="posts"
                    style={
                      selectedImage.code === data.code
                        ? { border: "3px solid #FF3E6C", cursor: "pointer" }
                        : { cursor: "pointer" }
                    }
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramGrid;
