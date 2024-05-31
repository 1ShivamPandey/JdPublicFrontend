import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Bar from '../Assets/Bar.png'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div>
          <Link to="/">
          <img  className="logo-size" src={logo} alt="School Logo" />
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
          
          {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}} > */}

          <div className="School-Details">
            <h2 style={{ fontWeight: "bolder" }}>JD PUBLIC SCHOOL</h2>
            <p style={{ marginTop: "30px" }}>School Code : 60722</p>
            <p style={{ marginTop: "30px" }}>Affiliation No : 2131719</p>
          </div>


          <div className="menu-icon" onClick={toggleMenu}>
            <img src={Bar} />
          </div>

          {/* </div> */}

          <div className={`nav-bar ${isOpen ? "open" : ""}`}>
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/#about-us">
                About us
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/Admission">
                Admission
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/Examination">
                Examination
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/Gallery">
                Gallery
              </Link>
            </div>
            {/* <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/ContactUs">
                Contact us
              </Link>
            </div> */}
            <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/PublicDisclosure">
                Mandatory disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
