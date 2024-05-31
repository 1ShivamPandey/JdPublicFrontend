import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import first from "../Assets/SliderImages/1.jpg";
import second from "../Assets/SliderImages/2.JPG";
import third from "../Assets/SliderImages/3.JPG";
import fourth from "../Assets/SliderImages/4.JPG";
import fifth from "../Assets/SliderImages/5.JPG";
import sixth from "../Assets/SliderImages/6.JPG";
import seventh from "../Assets/SliderImages/7.JPG";

import "../css/Slideshow.css";
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

const slideImages = [
  {
    url: third,
    caption:"Block 2"
  },
  {
    url: second,
    caption: "Block 1",
  },
  {
    url: first,
    caption: "School Playground",
  },
  {
    url: fourth,
    caption: "Block 1",
  },
  {
    url: fifth,
    caption: "Playground",
  },
  {
    url: sixth,
    caption: "Entry gate",
  },
  {
    url: seventh,
    caption: "Corridor",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="divstyle"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="caption-span">{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
