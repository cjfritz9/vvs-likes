import { useState } from "react";
import PackageList from "../../../components/package_list";

const FreeAutomaticLikesArray = [
  {
    name: "50-75 likes Per Post. Monthly Gifts",
    price: ["$3.33", "$7.99", "$109.50"],
    save: "save 15%",
    id: "1",
  },
  {
    name: "110-185 likes Per Post. Weekly Gifts",
    price: ["$5.77", "$19.99", "$199.11"],
    save: "save 20%",
    id: "2",
  },
  {
    name: "1k-1.4k likes Per Post. Daily Gifts",
    price: ["$24.77", "$29.99", "$849.01"],
    save: "save 30%",
    id: "3",
  },
  {
    name: "7.7k-11.1k likes Per Post. Premium Baller Gifts",
    price: ["$133.33", "$420.69", "$4200.69"],
    save: "save 35%",
    id: "4",
  },
];

const AutomaticLikesPackage = () => {
  const [isSelectedRadio, setIsSelectedRadio] = useState("");
  const [selected, setSelected] = useState("");

  const handleChangeRadio = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = e.target;
    setIsSelectedRadio(value);

    setSelected(id);
  };

  return (
    <>
      <div className="packages">
        <span
          style={{
            backgroundColor: "#dce7f7",
            color: "#0863eb",
            padding: "4px 8px",
            borderRadius: "12px !important",
            fontSize: "16px",
            fontWeight: "700",
          }}
          className="badge rounded-pill"
        >
          {"Weekly"}
        </span>

        <div className="badge-pill">
          <span
            style={{
              backgroundColor: "#FACC05",
              color: "#0863eb",
              padding: "8px",
              borderRadius: "10px !important",
            }}
            className="badge rounded-pill pill-above"
          >
            {"-18%"}
          </span>
          <span
            style={{
              backgroundColor: "#dce7f7",
              color: "#0863eb",
              padding: "4px 8px",
              borderRadius: "12px !important",
              fontSize: "16px",
              fontWeight: "700",
            }}
            className="badge rounded-pill"
          >
            {"Monthly"}
          </span>
        </div>

        <div className="badge-pill">
          <span
            style={{
              backgroundColor: "#FACC05",
              color: "#0863eb",
              padding: "8px",
              borderRadius: "10px !important",
            }}
            className="badge rounded-pill pill-above"
          >
            {"-34%"}
          </span>
          <span
            style={{
              backgroundColor: "#dce7f7",
              color: "#0863eb",
              padding: "4px 8px",
              borderRadius: "12px !important",
              fontSize: "16px",
              fontWeight: "700",
            }}
            className="badge rounded-pill"
          >
            {"Annually"}
          </span>
        </div>
      </div>
      <PackageList
        packagelistArray={FreeAutomaticLikesArray}
        selected={selected}
        handleChangeRadio={handleChangeRadio}
        isSelectedRadio={isSelectedRadio}
        heading={"What are Instagram likes and why are they important?"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        saveUpto={"Save up to 70%"}
        instantlyDelivery={[
          <span className="instant-like">1k-1.4</span>,
          "  Likes Per Post Charged ",
          <span className="instant-like">Monthly $29.99 </span>,
        ]}
        btnText={"Subscribe"}
        savingPillData={"-41% Savings"}
      />
      {/* <div
        className="d-flex gap-3 mobile_flex"
        style={{
          marginTop: "16px",
        }}
      >
        <span
          style={{
            backgroundColor: "#FACC05",
            color: "#0863eb",
            padding: "8px 20px",
            marginRight: "41px",
            marginTop: "5px",
            borderRadius: "18px !important",
          }}
          class="badge rounded-pill"
        >
          {"7-Days Free"}
        </span>
        <h4
          style={{
            color: "#02111B",
          }}
        >
          <span className="instant-like">1k-1.4</span>, Likes Per Post Charged <span className="instant-like">Monthly $29.99 [Free for 7 Days] </span>
        </h4>
        
      </div> */}
    </>
  );
};
export default AutomaticLikesPackage;
