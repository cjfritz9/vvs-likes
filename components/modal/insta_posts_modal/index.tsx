import { Modal } from "react-bootstrap";
import InstagramGrid from "@/components/instagramGrid/InstagramGrid";
interface IProps {
  setIsInstaPost: any;
  show: boolean;
  onHide: () => void;
}

const InstaPostModal = (props: IProps) => {
  const setIsInstaPost = props.setIsInstaPost;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="insta_posts_outer">
            <InstagramGrid />
            <button
              className="instagramGridBtn"
              onClick={() => {
                setIsInstaPost(false);
              }}
            >
              Continue
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default InstaPostModal;
