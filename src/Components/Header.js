import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div
      style={{
        top: 0,
        // background: "rgba(1, 8, 0, 0.8)",
        backgroundColor:'black',
        boxShadow:
          "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
        backdropFilter: "blur(0.8px)",
        position: "fixed",
        width: "100%",
        height: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <img style={{ height: "60px", marginTop: "10px" }} src={logo} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: "45px",
            marginTop: "20px",
          }}
        >
          {/* <div style={{border:'2px solid white',borderRadius:'1000px', width:'100px', margin:'10px',}}> */}
          <div>
            <p style={{ color: "white", textAlign: "center" }}>Home</p>
          </div>

          <div>
            <p style={{ color: "white" }}>About us</p>
          </div>
          <div>
            <p style={{ color: "white" }}>Admission</p>
          </div>
          <div>
            <p style={{ color: "white" }}>Examination</p>
          </div>
          <div>
            <Link to="/Gallery">
            <p style={{ color: "white" }}>Gallery</p>
            </Link>
          </div>

          <div>
            <p style={{ color: "white" }}>Contact us</p>
          </div>

          <div>
            <Link to="/PublicDisclosure">
            <p style={{ color: "white" }}>Public disclosure</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
