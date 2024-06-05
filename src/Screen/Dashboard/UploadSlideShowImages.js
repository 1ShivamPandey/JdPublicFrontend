import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant";
import DeleteIcon from "../../../src/Assets/Delete.png";
import "../../css/common.css";

export default function UploadSlideShow() {
  const [productDetails, setProductDetails] = useState("");
  const [productImage, setProductImage] = useState(null); // Initialize as null for file upload
  const [productData, setProductData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!productDetails || !productImage) {
      console.log("Data is not filled");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("productDetails", productDetails);
      formData.append("productImage", productImage);

      const response = await axios.post(
        `${BASE_URL}/api/Dashboard/school/SlideShow`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful");
      alert("Image uploaded")

      setProductDetails(""); // Clear input after upload
      setProductImage(""); // Clear input after upload
      fetchData(); // Refresh the data after upload
    } catch (error) {
      console.log("Error uploading:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Dashboard/school/SlideShow`
      );

      setProductData(response.data.ProductData);
      console.log("Uploaded product response", response.data.ProductData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/Dashboard/school/SlideShow/${id}`
      );
      console.log("Delete successful");
      fetchData(); // Refresh the data after delete
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">Upload Gallery Images</h3>

      <div className="upload-form">
        <input
          onChange={(e) => setProductDetails(e.target.value)}
          value={productDetails}
          type="text"
          placeholder="Details"
          className="upload-input"
        />
        <input
          onChange={(e) => setProductImage(e.target.files[0])}
          type="file"
          className="upload-input"
        />
        <button onClick={submitHandler} className="upload-button">
          <p>Upload</p>
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        {productData.map((item) => (
          <div key={item._id}>
            <div
              style={{
                width: "250px",
                backgroundColor: "white",
                borderRadius: "10px",
                height: "auto",
                marginTop: "10px",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                marginLeft: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={`${BASE_URL}/${item.productImage}`}
                  alt={item.productImage}
                  style={{ height: "100px", borderRadius: "10px 10px 0 0", width: "250px" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "50px" }}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{item.productDetails}</p>
                <button onClick={() => deleteHandler(item._id)}>
                  <img src={DeleteIcon} style={{ height: "20px" }} alt="delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
