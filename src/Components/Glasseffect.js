import React from "react";
import "../css/glassstyle.css"
const Glasseffect = ({ title, details, image, p1, p2, p3, p4, p5, p6 }) => {

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.2)", // semi-transparent background
    backdropFilter: "blur(10px)", // blur effect
    WebkitBackdropFilter: "blur(10px)", // for Safari
   // border: "1px solid rgba(255, 255, 255, 0.3)", // border
    borderRadius: "10px", // rounded corners
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // subtle shadow
    // padding inside the card
    width: "600px", // width of the card
    margin: "20px auto", // center the card
    color: "#fff", // text color
    height: "550px",
    padding: "10px",
  };

  return (
    <div className="glassStyle">
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >

        <div>
          <img
            src={image}
            style={{
              height: "150px",
              // marginTop: "50px",
              borderRadius: "10px",
              display:'block',
              margin:'0 auto'
            }}
          />
        </div>

        <div style={{marginLeft:'10px'}}>
          {/* <p>{details}</p> */}
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>
          <p style={{textAlign:'right', marginTop:'20px'}}>{p6}</p>
        </div>

      </div>
    </div>
  );
};

export default Glasseffect;
