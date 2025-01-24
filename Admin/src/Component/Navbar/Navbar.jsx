import React from 'react'
import './navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="topbar">
      <div className="topbar-search">
        <input type="search" placeholder="search..." name="search" />
      </div>
      <div className="d-flex gap-2">
        <h5>Welcome To Admin</h5>
        {/* <div className="topbarIcon1">
          <i onClick={(()=>navigate("/notification"))} className="bi bi-bell"></i>
        </div>
        <div className="topbarIcon2">
          <i onClick={(()=>navigate('/admin-profile'))} class="bi bi-person-circle"></i>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Navbar