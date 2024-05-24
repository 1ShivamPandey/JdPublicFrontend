import React from "react";

import droneview from "../Assets/droneview.jpg";
import front from "../Assets/front.jpg";
import sideview from "../Assets/sideview.jpg";
import teachers from "../Assets/teachers.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

const slideImages = [
  {
    url: front,
    // caption: 'Slide 1'
  },
  {
    url: teachers,
    // caption: 'Slide 2'
  },
  {
    url: sideview,
    // caption: 'Slide 3'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
