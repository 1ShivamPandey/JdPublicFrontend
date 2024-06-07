import React, { useEffect, useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import first from "../Assets/SliderImages/1.jpg";
import second from "../Assets/SliderImages/2.JPG";
import third from "../Assets/SliderImages/3.JPG";
import fourth from "../Assets/SliderImages/4.JPG";
import fifth from "../Assets/SliderImages/5.JPG";
import sixth from "../Assets/SliderImages/6.JPG";
import seventh from "../Assets/SliderImages/7.JPG";
import axios from "axios";
import "../css/Slideshow.css";
import { BASE_URL } from "../Constant";
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
    caption: "Block 2",
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

const ActiveSlideshow = () => {
  const [productData, setProductData] = useState([]);
  const [image, setproductImage] = useState([]);
  const [productDe, setProductDetails] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/GalleryDataUpload`
        );

        setProductData(response.data.ProductData);
        console.log("uploaded product response", response.data.ProductData);

        const data = response.data.ProductData;
        const details = data.map((product) => product.productDetails);
        const image = data.map((product) => product.productImage);

        setProductDetails(details);
        setproductImage(image);
        
        const slides = data.map((item) => ({
            url: `${BASE_URL}/${item.productImage}`,
            caption: item.productDetails,
          }));

        console.log("this is product image", image);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.length> 0 && slideImages.map((slideImage, index) => (
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
export default ActiveSlideshow;
