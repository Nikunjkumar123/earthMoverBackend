import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.webp";
import "./sidebar.css";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(null);
  return (
    <div className="sidebar">
      <div>
        <a href="/" className="text-center">
          <img src={logo} className="logo" alt="dashboard logo" />
        </a>
      </div>
      {/* <h5>
        <Link to="/login">
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>
      </h5> */}

      <ul>
        <li>
          <div>
            <Link to="/categories">
              <i className="bi bi-folder"></i> Categories
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/sub-categories">
              <i className="bi bi-folder-plus"></i> Sub Categories
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/products">
              <i className="bi bi-box-seam"></i> Products
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact-us">
              <i className="bi bi-envelope"></i> Contact Us
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact-equipment">
              <i className="bi bi-envelope"></i> Equipments Enquiry
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
