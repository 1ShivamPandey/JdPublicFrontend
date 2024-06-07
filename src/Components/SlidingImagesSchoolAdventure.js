import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constant";
import "../css/SlidingImagesAdventure.css";

export default function SlidingImagesAdventure() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/school/SchoolAdventure`
        );

        setProductData(response.data.ProductDataAdventure);
        console.log(
          "Fetched product data:",
          response.data.ProductDataAdventure
        );
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="marquee">
        <div className="marquee-content left-to-right">
          {productData.length> 0 && productData.map((item) => (
            <div className="marquee-item" key={item._id}>
              <img  style={{height:'150px',borderRadius:'10px'}}
                className="img"
                src={`${BASE_URL}/${item.productImage}`}
                alt={item.productDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
