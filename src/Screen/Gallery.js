import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import front from "../Assets/front.jpg";
import sideview from "../Assets/sideview.jpg";
import teachers from "../Assets/teachers.jpg";
import girl from "../Assets/girl.jpg";
import Glasseffect from "../Components/Glasseffect";
export default function Gallery() {
  return (
    <div style={{backgroundColor:'black'}}>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ color: "black", textAlign: "center" }}>Gallery</h1>
      </div>

      <div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={front}
              style={{
                height: "500px",
                width: "350px",
                borderRadius: "10px",
                opacity: "0.9",
              }}
            />
            <h1
              style={{
                position: "absolute",
                top: "50px",
                zIndex: "1",
                fontSize: "24px",
                fontWeight: "bold",
                left: "130px",
                border: "5px solid black",
                color: "black",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              Learn
            </h1>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={girl}
              style={{
                height: "500px",
                width: "350px",
                borderRadius: "10px",
                opacity: "0.9",
              }}
            />
            <h1
              style={{
                position: "absolute",
                top: "50px",
                zIndex: "1",
                fontSize: "24px",
                fontWeight: "bold",
                left: "100px",
                border: "5px solid black",
                color: "black",
                padding: "5px",
                borderRadius: "10px",
                fontFamily:'monospace'
              }}
            >
              Adventure
            </h1>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={front}
              style={{
                height: "500px",
                width: "350px",
                borderRadius: "10px",
                opacity: "0.9",
              }}
            />
            {/* <h1
              style={{
                position: "absolute",
                top: "50px",
                zIndex: "1",
                fontSize: "24px",
                fontWeight: "bold",
                left: "100px",
                border: "5px solid black",
                color: "white",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              Sample text
            </h1> */}

            <div
              style={{
                zIndex: "1",
                top: "350px",
                position: "absolute",
                marginRight: "50px",
                marginLeft: "45px",
              }}
            >
              <div>
                <Glasseffect title="School" />
              </div>



            </div>
          </div>
        </div>


<div style={{margin:'20px',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    <img src={front} style={{height:'200px',borderRadius:'10px', }}/>
    <img src={front} style={{height:'200px',borderRadius:'10px', }}/>
    <img src={front} style={{height:'200px',borderRadius:'10px', }}/>
    <img src={front} style={{height:'200px',borderRadius:'10px', }}/>

</div>


      </div>
    </div>
  );
}
