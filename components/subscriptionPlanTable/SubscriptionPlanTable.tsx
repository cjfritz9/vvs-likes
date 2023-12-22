import { useState } from "react";
import "../../styles/subscriptionPlanTable.css";
import PackageList from "../package_list";

const realLikesArray = [
  { name: "50 Real likes", price: ["$9.99"], save: "save 15%", id: "1" },
  { name: "100 Real likes", price: ["$19.99"], save: "save 20%", id: "2" },
  { name: "250 Real likes", price: ["$29.99"], save: "save 30%", id: "3" },
  { name: "500 Real likes", price: ["$49.99"], save: "save 35%", id: "4" },
];

function SubscriptionPlanTable() {
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
    <div className="subscriptionPlanTable">
      <div style={{ marginTop: "50px" }}>
        <div className="subscriptionPlanTable-header">
          <h4>...still Waiting? Get your Likes Instantly. Boost A Post now.</h4>
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Members unlock exclusive benefits and rewards
          </p>
        </div>

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
          instantlyDelivery={[
            <span className="instant-like">250</span>,
            " Real Likes Delivered instantly, ",
            <span className="instant-like">29.99</span>,
          ]}
          btnText={"Buy Now"}
        />
      </div>
    </div>
  );
}

export default SubscriptionPlanTable;
