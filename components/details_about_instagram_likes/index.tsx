import EngagementAndPopularity from "./engagement_popularity";
import RealInstagramLikes from "./real_instagram_likes";

interface IProps {
  setIsSelectPostModal: any;
  setUserData: any;
}

const DetailsAboutInstagramLikes = (props: IProps) => {
  const { setIsSelectPostModal, setUserData } = props;
  return (
    <div style={{ background: "#0D57C6" }} className="mobile_padding">
      <RealInstagramLikes
        setIsSelectPostModal={setIsSelectPostModal}
        setUserData={setUserData}
      />
      <EngagementAndPopularity />
    </div>
  );
};
export default DetailsAboutInstagramLikes;
