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

        <div className="School-tabs">
          
          {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}} > */}
          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
          <h2 className="school-name" style={{ fontWeight: "bolder" }}>JD PUBLIC SCHOOL</h2>
 
          <div className="School-Details">
            <p style={{fontWeight: "bolder",marginTop:'30px',marginLeft:'20px'  }}>School Code : 60722</p>
            <p style={{marginLeft:'20px',fontWeight: "bolder" ,marginTop:'30px'}}>Affiliation No : 2131719</p>
          </div>

          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <img style={{height:'50px'}} src={Bar} />
          </div>

          {/* </div> */}

          <div className={`nav-bar ${isOpen ? "open" : ""}`}>
            <div>
              <Link className="link-style" style={{  textDecoration: "none",fontWeight:'bold' }} to="/">
                Home
              </Link>
            </div>
            {/* <div>
              <Link className="link-style" style={{  textDecoration: "none",fontWeight:'bold' }} to="/#about-us">
                About us
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none",fontWeight:'bold' }} to="/Admission">
                Admission
              </Link>
            </div>*/}
            <div>
              <Link className="link-style" style={{  textDecoration: "none" ,fontWeight:'bold'}} to="/Examination">
                Examination
              </Link>
            </div> 
            <div>
              <Link className="link-style" style={{  textDecoration: "none" ,fontWeight:'bold'}} to="/Gallery">
                Gallery
              </Link>
            </div>
            {/* <div>
              <Link className="link-style" style={{  textDecoration: "none" }} to="/ContactUs">
                Contact us
              </Link>
            </div> */}
            <div>
              <Link className="link-style" style={{  textDecoration: "none",fontWeight:'bold' }} to="/PublicDisclosure">
                Mandatory disclosure
              </Link>
            </div>
            <div>
              <Link className="link-style" style={{  textDecoration: "none",fontWeight:'bold' }} to="/Dashboard">
                Dashboard 
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
