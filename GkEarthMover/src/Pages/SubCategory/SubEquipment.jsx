import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AshokLealand from "../../Assets/Ashok Lealand Tipper 1.jpg";
import Sany135 from "../../Assets/Sany135.webp";
import leeboy_985 from "../../Assets/leeboy_985 Grader.webp";
import escortMini from "../../Assets/Roller-Minicase.png";
import escortBaby from "../../Assets/escorts-ec-3664-Baby Roller.jpg";
import escortCompactor from "../../Assets/Escorts-5250-Soil Compactor.webp";

const SubEquipment = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    

  const equipmentData = [
    {
      id: 1,
      name: "Grader LiuGong CLG-414",
      category: "Moter Grader",
      image: AshokLealand,
      deliveryInfo: "LiuGang India Private Limited",
      specs: ["Model - CLG4160D"],
    },
    {
      id: 3,
      name: "TATA HITACHI-200LC",
      category: "Excavator Machine",
      image: Sany135,
      deliveryInfo: "TATA Hitachi",
      specs: [],
    },
    {
      id: 12,
      name: "HYVA-2844",
      category: "Dumper/Hywa",
      image: leeboy_985,
      deliveryInfo: "Tata Motors",
      specs: ["Model - HYVA-8899"],
    },
    {
      id: 18,
      name: "Backhoe Loader Case-9868",
      category: "Backhoe Loader/JCB",
      image: escortMini,
      deliveryInfo: "Case Constructions",
      specs: [],
    },
    {
      id: 23,
      name: "Case -1107 Roller",
      category: "Soil Compactor/Roller",
      image: escortBaby,
      deliveryInfo: "Case New Holland",
      specs: [],
    },
    {
      id: 31,
      name: "Sany Stc1000",
      category: "Cran",
      image: escortCompactor,
      deliveryInfo: "Sany Heavy Industry India Pvt. Ltd.",
      specs: [],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const openModal = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEquipment(null);
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "007fd149-ccb4-4fcb-a57a-0b627d71f057";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Good job!",
          text: "Inquiry sent successfully!",
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="container RentalEquipment">
        <div className="row">
          <div className="equipment-title">
            <h3>More Model</h3>
          </div>

          {/* Equipment Cards */}
          <div className="row m-0 p-0">
            {equipmentData.map((equipment) => (
              <div key={equipment.id} className="col-lg-4 col-md-6">
                <div className="card equipment-card">
                  <div className="equipment-img">
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
                    <ul className="specs-list">
                      {equipment.specs.map((spec, index) => (
                        <h5 key={index}>{spec}</h5>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                    <button
                      className="reserve-btn"
                      onClick={() => openModal(equipment)}
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal (Render only when modal is open) */}
      {isModalOpen && selectedEquipment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
          >
            <h2>Reserve Equipment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Equipment Name:</label>
                <input
                  type="text"
                  value={selectedEquipment.name}
                  {...register("Equipment Name")}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Company Name:</label>
                <input
                  type="text"
                  value={selectedEquipment.deliveryInfo}
                  {...register("Equipment Company")}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
                <span className="text-danger">
                  {errors.name && <p>{errors.name.message}</p>}
                </span>
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Phone number cannot exceed 10 digits",
                    },
                  })}
                />
                <span className="text-danger">
                  {errors.phone && <p>{errors.phone.message}</p>}
                </span>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <span className="text-danger">
                  {errors.email && <p>{errors.email.message}</p>}
                </span>
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  type="text"
                  placeholder="Address"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
                <span className="text-danger">
                  {errors.location && <p>{errors.location.message}</p>}
                </span>
              </div>
              <div className="form-actions">
                <button type="button" onClick={closeModal}>
                  Close
                </button>
                <button type="submit">Confirm Reservation</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SubEquipment;
