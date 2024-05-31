import React, { useEffect, useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import front from "../Assets/front.jpg";
import sideview from "../Assets/sideview.jpg";
import teachers from "../Assets/teachers.jpg";
import girl from "../Assets/girl.jpg";
import Glasseffect from "../Components/Glasseffect";
import "../css/gallery.css";
import axios from "axios";
import { BASE_URL } from "../Constant";
export default function Gallery() {
  const [productData, setProductData] = useState([]);
  const [image, setproductImage] = useState([]);
  const [productDe, setProductDetails] = useState("");
  const [youtubeData, SetYoutubeData] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [youtubeDetails, Setyoutubedetails] = useState("");

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

        console.log("this is product image", image);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/youtube/link`
        );

        SetYoutubeData(response.data.youtubeData);
        console.log("uploaded product response", response.data.youtubeData);

        const data = response.data.youtubeData;
        const link = data.map((product) => product.YoutubeLink);
        const details = data.map((product) => product.youtubeDetails);

        setYoutubeLink(link);
        Setyoutubedetails(details);

        console.log("this is product image", image);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchData();
  }, []);
  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(
        0,
        ampersandPosition
      )}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <div>
      <div>
        <div style={{ marginTop: "150px" }}>
          <h1 style={{ color: "black", textAlign: "center" }}>Gallery </h1>
        </div>

        <div>
          <div className="Gallery-div">
            {productData.map((item) => (
              <div key={item._id}>
                <div
                  style={{
                    width: "250px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    height: "250px",
                    marginTop: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={`${BASE_URL}/${item.productImage}`}
                      alt={item.productImage}
                      style={{
                        height: "200px",
                        borderRadius: "10px 10px 0 0",
                        width: "250px",
                      }}
                    />
                  </div>

                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    {item.productDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "150px" }}>
          <h1 style={{ color: "black", textAlign: "center" }}>
            Youtube Videos{" "}
          </h1>
        </div>

        <div>
          <div className="Gallery-div">
            {youtubeData.map((item) => (
              <div key={item._id}>
                <div
                  style={{
                    width: "250px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    height: "250px",
                    marginTop: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {/* <img
                      src={`http://localhost:5000/${item.productImage}`}
                      alt={item.productImage}
                      style={{
                        height: "200px",
                        borderRadius: "10px 10px 0 0",
                        width: "250px",
                      }}
                    /> */}
                    <iframe
                      style={{
                        height: "200px",
                        borderRadius: "10px 10px 0 0",
                        width: "250px",
                      }}
                      // src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      src={getEmbedUrl(item.YoutubeLink)}
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                  </div>

                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    {item.YoutubeDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
