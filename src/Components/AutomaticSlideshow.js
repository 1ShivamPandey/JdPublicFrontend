import React, { useEffect, useState } from "react";
import "../css/AutomaticSlideshow.css";
import axios from "axios";
import { BASE_URL } from "../Constant";

const AutomaticSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState([1, 1]);
  const [productData, setProductData] = useState([]);

  const slideId = "mySlides1";

  const plusSlides = (n) => {
    showSlides(slideIndex[0] + n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName(slideId);
    if (n > slides.length) {
      setSlideIndex([1, 1]);
    } else if (n < 1) {
      setSlideIndex([slides.length, slides.length]);
    } else {
      setSlideIndex([n, n]);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex[0] - 1].style.display = "block";
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Dashboard/school/SlideShow`
      );
      setProductData(response.data.ProductData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
      showSlides(slideIndex[0]);
    }
  }, [productData]);
console.log("Product data...",productData)
  return (
    <div>
      {/* <h2 style={{ textAlign: "center" }}>Multiple Slideshows</h2> */}

      <div className="slideshow-container">
        {productData.length> 0 && productData.map((item) => (
          <div className="mySlides1" key={item._id}>
            <div style={{color:'black',fontWeight:'bold',fontSize:'50px'}} className="caption">{item.productDetails}</div>
            <img
              src={`${BASE_URL}/${item.productImage}`}
              style={{ width: "100%", }}
              // alt={product.description}
            />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default AutomaticSlideshow;
