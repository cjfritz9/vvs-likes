import { Modal } from "react-bootstrap";
import "../../../styles/package_detail_modal.css";

interface IProps {
  setIsPackageDetailsModal: any;
  setIsInstaPost: any;
  show: boolean;
  onHide: () => void;
}

const PackageDetailsModal = (props: IProps) => {
  const setIsPackageDetailsModal = props.setIsPackageDetailsModal;
  const setIsInstaPost = props.setIsInstaPost;

  return (
    <>
      <Modal
        className="thank-you-modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div>
          <Modal.Body style={{ textAlign: "center" }}>
            <div className="content_wrap">
              <div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <span
                    style={{
                      width: "55px",
                      height: "46px",
                      padding: " 14px",
                      borderRadius: "10px",
                      gap: "10px",
                      backgroundColor: "#0DC6BB",
                      color: "white",
                    }}
                  >
                    187
                  </span>
                  <p className="mb-0">Live users checking out</p>
                </div>
                <div
                  className="d-flex justify-content-center  aligin-item-center"
                  style={{
                    borderRadius: "10px",
                    lineHeight: "28px",

                    width: "100%",
                  }}
                >
                  <div>
                    <div className="pakage_title">
                      <h4
                        style={{
                          fontSize: "40px",
                          fontWeight: "600",
                          lineHeight: "40px",
                          letterSpacing: "0em",
                          textAlign: "center",
                          marginTop: "30px",
                        }}
                      >
                        Package Details
                      </h4>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "28px",
                          letterSpacing: "0px",
                          textAlign: "center",
                          color: "#6B7175",
                        }}
                      >
                        The Instagram Likes Package offers a quick and
                        convenient way to boost engagement on your posts. With
                        options ranging from a few hundred to several thousand
                        likes.
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: "40px",
                        maxWidth: "800px",
                        width: "100%",
                      }}
                    >
                      <div>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ height: "50px", marginBottom: "10px" }}
                        >
                          <option selected>
                            250 likes{" "}
                            <span>
                              {" "}
                              <span
                                style={{
                                  backgroundColor: "yellow",
                                  color: "#0863eb",
                                  padding: "4px 8px 4px 8px",
                                  marginRight: "41px",
                                  marginTop: "5px",
                                }}
                                className="badge rounded-pill"
                              >
                                {"Best value"}
                              </span>
                            </span>
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div style={{ width: "100%", marginBottom: "10px" }}>
                        <label className="form-label d-flex">User name:</label>
                        <input
                          style={{ width: "100%", height: "50px" }}
                          type="text"
                          className="form-control"
                          placeholder="Enter Instagram valid username e.g. “cristiano”"
                        />
                      </div>
                      <div style={{ width: "100%", marginBottom: "24px" }}>
                        <label className="form-label d-flex">Email:</label>
                        <input
                          style={{ width: "100%", height: "50px" }}
                          type="email"
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          className="btn text-white"
                          style={{
                            width: "144px",
                            height: "50px",
                            padding: "17px, 44px, 17px, 44px",
                            borderRadius: "25px",
                            gap: "10px",
                            background: "#FF3E6C",
                            fontWeight: "700",
                          }}
                          onClick={() => {
                            setIsInstaPost(true);
                            setIsPackageDetailsModal(false);
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default PackageDetailsModal;
