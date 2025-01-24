import React, { useState } from "react";
import "./Equipment.css";
import { Link, useNavigate } from "react-router-dom";
import Tata200 from "../../Assets/Tata Hitachi 200 Excavator.webp";
import leeboy_414 from "../../Assets/Liu_Gong_414 Grader.webp";
import CaseRoller from "../../Assets/Case New Holand 1107 Soil Compactor.webp";
import HYWA8899 from "../../Assets/HYVA-2844 Tata Motors.jpeg";
import Case9868 from "../../Assets/Case-9868.webp";
import Sanystc from "../../Assets/Sany-stc1000s-100-ton-truck-crane-500x500.webp";


const Equipment = () => {
  const [selectedTab, setSelectedTab] = useState("Moter Grader");

  const [equipmentData] = useState([
    {
      id: 1,
      name: "Grader LiuGong CLG-414",
      category: "Moter Grader",
      image: leeboy_414,
      deliveryInfo: "LiuGang India Private Limited",
      specs: ["Modal - CLG4160D"],
    },

    {
      id: 3,
      name: "TATA HITACHI-200LC",
      category: "Excavator Machine",
      image: Tata200,
      deliveryInfo: "TATA Hitachi",
      specs: [""],
    },

    {
      id: 12,
      name: "HYVA-2844",
      category: "Dumper/Hywa",
      image: HYWA8899,
      deliveryInfo: "Tata Moters",
      specs: ["Modal - HYVA-8899"],
    },

    {
      id: 18,
      name: "Backhoe Loader Case-9868",
      category: "Backhoe Loader/JCB",
      image: Case9868,
      deliveryInfo: "Case Constructions",
      specs: [""],
    },

    {
      id: 23,
      name: "Case -1107 Roller",
      category: "Soil Compactor/Roller",
      image: CaseRoller,
      deliveryInfo: "Case New Holand",
      specs: [""],
    },

    {
      id: 31,
      name: "Sany Stc1000",
      category: "Cran",
      image: Sanystc,
      deliveryInfo: "Sany Heavy Industry India Pvt. Ltd.",
      specs: [""],
    },
  ]);

  const navigate = useNavigate();

  // Filter equipment data based on selected tab
  const filteredEquipmentData = equipmentData.filter(
    (equipment) => equipment.category === selectedTab
  );

  return (
    <>
      <div className="container RentalEquipment">
        <div className="row">
          <div className="equipment-title">
            <h3>Awesome Equipment</h3>
            <h1>Featured Rental Equipment</h1>
            <p>
              Our commitment to quality ensures that every piece of equipment we
              offer is maintained to the highest standards, delivering the
              performance needed on-site.
            </p>
          </div>

          {/* Tabs */}
          <div className="tab-section">
            {[
              "Moter Grader",
              "Excavator Machine",
              "Dumper/Hywa",
              "Backhoe Loader/JCB",
              "Soil Compactor/Roller",
              "Cran",
            ].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${selectedTab === tab ? "active" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Equipment Cards */}
          <div className="row m-0 p-0">
            {filteredEquipmentData.map((equipment) => (
              <div key={equipment.id} className="col-lg-4 col-md-6">
                <div className="card equipment-card">
                  <div
                    className="equipment-img"
                    onClick={() => navigate(`/subEquipment`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={equipment.image}
                      className="card-img-top"
                      alt={equipment.name}
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{equipment.name}</h2>
                    <hr />
                    <h4 className="delivery-info">{equipment.deliveryInfo}</h4>
                  </div>
                  <div className="card-footer">
                  <Link to="/subEquipment">
                    <button
                      className="reserve-btn"
                     
                    >
                      View All
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
