import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constant";
import "../css/SlidingImages.css";

export default function SlidingImages() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/school/SchoolActivities`
        );

        setProductData(response.data.ProductData);
        console.log("Fetched product data:", response.data.ProductData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="marquee">
        <div className="marquee-content right-to-left">
          {productData.length> 0 && productData.map((item) => (
            <div className="marquee-item" key={item._id}>
              <img style={{height:'150px',borderRadius:'10px'}}
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
