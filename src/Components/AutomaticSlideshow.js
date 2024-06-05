import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { BASE_URL } from "../Constant";

const AutomaticSlideshow = () => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/GalleryDataUpload`
        );

        console.log("API response:", response.data);

        const data = response.data.ProductData;
        const slides = data.map((product) => ({
          url: `${BASE_URL}/${product.productImage}`,
          caption: product.productDetails,
        }));

        console.log("Formatted slide data:", slides);

        setSlideImages(slides);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const slideContainerStyle = {
    width: "100%",
    margin: "0 auto",
  };

  const slideDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "800px",
    position: "relative",
  };

  const captionSpanStyle = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={slideContainerStyle}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...slideDivStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={captionSpanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default AutomaticSlideshow;
