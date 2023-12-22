import { useState } from "react";
import { Modal } from "react-bootstrap";
import PackageList from "../../package_list";

interface IProps {
  setIsPackageDetailsModal: any;
  setIsThankYouModal: any;
  show: boolean;
  onHide: () => void;
}

const ThankYouModal = (props: IProps) => {
  const setIsPackageDetailsModal = props.setIsPackageDetailsModal;
  const setIsThankYouModal = props.setIsThankYouModal;

  const realLikesArray = [
    { name: "50 Real likes", price: ["$9.99"], save: "save 15%", id: "1" },
    { name: "100 Real likes", price: ["$19.99"], save: "save 20%", id: "2" },
    { name: "250 Real likes", price: ["$29.99"], save: "save 30%", id: "3" },
    { name: "500 Real likes", price: ["$49.99"], save: "save 35%", id: "4" },
  ];
  const [isSelectedRadio, setIsSelectedRadio] = useState("");
  // const [name, setName] = useState("");
  const [selected, setSelected] = useState("");

  const handleChangeRadio = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = e.target;
    setIsSelectedRadio(value);
    // setName(value);
    setSelected(id);
  };

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
            <div
              className="card_block"
              style={{
                border: "2px solid #B7CDEE",
                borderRadius: "10px",
                lineHeight: "28px",

                // marginTop: "32px",
              }}
            >
              <h4>Thank you for waiting...</h4>
              <p>
                <span className="tanks_dis">
                  Click the link we sent to your email to confirm your email and{" "}
                </span>{" "}
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  get up to 50 free likes.
                </span>
              </p>
            </div>
            <button
              className="btn"
              style={{ width: "20%", backgroundColor: "lightpink" }}
              onClick={() => {
                setIsPackageDetailsModal(true);
                setIsThankYouModal(false);
              }}
            >
              Next
            </button>
            <div
              className="card_block"
              style={{
                border: "2px solid #B7CDEE",
                borderRadius: "10px",
                lineHeight: "28px",

                marginTop: "40px",
                // backgroundColor: "#f3f6fc",
              }}
            >
              <h4
                className="text-center"
                style={{ fontWeight: "600", marginBottom: "24px" }}
              >
                ...still Waiting? Get your Likes Instantly. Boost A Post now.
              </h4>
              <p>Members unlock exclusive benefits and rewards</p>

              <PackageList
                packagelistArray={realLikesArray}
                selected={selected}
                handleChangeRadio={handleChangeRadio}
                isSelectedRadio={isSelectedRadio}
                heading={"What are Instagram likes and why are they important?"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                saveUpto={"Save up to 70%"}
                instantlyDelivery={
                  "250 Real Instagram Likes, Securly Delivered Instantly $29.99"
                }
                btnText={"Buy"}
              />
              {/* {realLikesArray.map((item) => {
                return (
                  <div
                    className="pl-2"
                    style={{
                      backgroundColor:
                        selected === item.id ? "#c5d6f2" : "#f3f6fc",
                      marginBottom: "16px",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="form-check d-flex justify-content-between">
                      <div className="d-flex justify-content-between align-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          value={item.name}
                          name={item.name}
                          onChange={handleChangeRadio}
                          style={{
                            margin: "12px 0px",
                            backgroundColor:
                              selected === item.id ? "#FF3E6C" : "white",
                            boxShadow: "none",
                            border:
                              selected === item.id
                                ? "transparent"
                                : "1px solid #0D57C6",
                          }}
                          checked={isSelectedRadio === item.name}
                          id={item.id}
                        />
                        <label
                          className="form-check-label ms-2"
                          style={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          {item.name}
                        </label>
                        <span
                          style={{
                            backgroundColor: "#dce7f7",
                            color: "#0863eb",
                          }}
                          class="badge rounded-pill"
                        >
                          {item.save}
                        </span>
                      </div>
                      {selected === item.id && (
                        <span
                          style={{
                            backgroundColor: "yellow",
                            color: "#0863eb",
                            padding: "4px 8px 4px 8px",
                            marginRight: "41px",
                            marginTop: "5px",
                          }}
                          class="badge rounded-pill"
                        >
                          {"Best value"}
                        </span>
                      )}

                      <button
                        className="btn rounded-4"
                        style={{
                          border:
                            selected === item.id ? "4px solid #FF3E6C" : "",
                          width: "14%",
                        }}
                      >
                        {item.price}
                      </button>
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  marginBottom: "16px",
                  borderRadius: "10px",
                  height: "40px",
                  border: "2px solid #0D57C6",
                }}
              >
                <div className="form-check ">
                  <div className="d-flex justify-content-between align-items-center">
                    <select
                      className="w-100"
                      value={value}
                      onChange={handleChangeDropdown}
                    >
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>

                    <span
                      style={{
                        backgroundColor: "yellow",
                        color: "#0863eb",
                        padding: "8px 20px",
                        marginRight: "41px",
                        marginTop: "5px",
                      }}
                      class="badge rounded-pill"
                    >
                      {"Save up to 70%"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <h4>250 Real Likes Delivered instantly, 29.99</h4>
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
                    setIsThankYouModal(false);
                    setIsPackageDetailsModal(true);
                  }}
                >
                  Buy Now
                </button>
              </div> */}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default ThankYouModal;
