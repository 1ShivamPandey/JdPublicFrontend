import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constant";
import axios from "axios";
import "../../css/common.css";
import DeleteIcon from "../../../src/Assets/Delete.png";

export default function UploadSchoolAdventure() {
  const [productDetails, setProductDetails] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productData, setProductData] = useState([]);

  const submitSchoolAdventure = async (e) => {
    e.preventDefault();
    if (!productDetails || !productImage) {
      console.log("data is not filled");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("productDetails", productDetails);
      formData.append("productImage", productImage);

      const response = await axios.post(
        `${BASE_URL}/api/Dashboard/school/SchoolAdventure`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      alert(" School Adventure image uploaded successfully 🎉")
      setProductDetails("");
      setProductImage("");
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Dashboard/school/SchoolAdventure`
      );

      setProductData(response.data.ProductDataAdventure);
      console.log("Fetched product data:", response.data.ProductDataAdventure);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/Dashboard/school/SchoolAdventure/${id}`
      );
      console.log("Delete successful");
      fetchData(); // Refresh the data after delete
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">Upload School Adventure 🎟 Images</h3>

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
        <button onClick={submitSchoolAdventure} className="upload-button">
          <p>Upload</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {productData.map((item) => (
          <div key={item._id}>
            <div
              style={{
                width: "250px",
                backgroundColor: "white",
                borderRadius: "10px",
                height: "auto",
                marginTop: "10px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                marginLeft: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={`${BASE_URL}/${item.productImage}`}
                  alt={item.productImage}
                  style={{
                    height: "100px",
                    borderRadius: "10px 10px 0 0",
                    width: "250px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: "50px",
                }}
              >
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  {item.productDetails}
                </p>
                <button onClick={() => deleteHandler(item._id)}>
                  <img
                    src={DeleteIcon}
                    style={{ height: "20px" }}
                    alt="delete"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
