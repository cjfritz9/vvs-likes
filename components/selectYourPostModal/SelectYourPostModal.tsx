import Modal from "react-bootstrap/Modal";
import InstagramGrid from "../instagramGrid/InstagramGrid";
import SubscriptionPlanTable from "@/components/subscriptionPlanTable/SubscriptionPlanTable";

interface IProps {
  setIsSelectPostModal: any;
  setIsWebsiteTimerModal: any;
  userData: any;
  selectedImage: any;
  setSelectedImage: any;
  show: boolean;
  onHide: () => void;
}

function SelectYourPostModal(props: IProps) {
  const setIsSelectPostModal = props.setIsSelectPostModal;
  const setIsWebsiteTimerModal = props.setIsWebsiteTimerModal;
  const userData = props?.userData;
  const selectedImage = props?.selectedImage;
  const setSelectedImage = props?.setSelectedImage;

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div>
            <div className="insta_posts_outer">
              <InstagramGrid
                setIsSelectPostModal={setIsSelectPostModal}
                setIsWebsiteTimerModal={setIsWebsiteTimerModal}
                userDetail={userData}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
              <button
                className="instagramGridBtn"
                onClick={() => {
                  setIsSelectPostModal(false);
                  setIsWebsiteTimerModal(true);
                }}
              >
                Continue
              </button>
            </div>

            <SubscriptionPlanTable />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SelectYourPostModal;
