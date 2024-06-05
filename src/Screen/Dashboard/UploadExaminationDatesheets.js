import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constant";
import axios from "axios";
import "../../css/common.css";
import Pdficon from "../../Assets/Pdfimage.png";
import DeleteIcon from "../../../src/Assets/Delete.png";

export default function UploaExaminationDatesheets() {
  const [pdfDetails, SetpdfDetails] = useState("");
  const [pdfFile, SetpdfFile] = useState("");
  const [productdata, setProductData] = useState([]);

  const submitHandlerforPDf = async (e) => {
    e.preventDefault();
    if (!pdfDetails || !pdfFile) {
      console.log("data is not filled");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("pdfDetails", pdfDetails);
      formData.append("pdfFile", pdfFile);

      const response = await axios.post(
        `${BASE_URL}/api/Dashboard/PDF/ExaminationDatesheet`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log("done");
      alert("Datesheet uploaded")
      SetpdfDetails("")
      SetpdfFile("")

    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Dashboard/PDF/ExaminationDatesheet`
      );

      setProductData(response.data.PdfData);
      console.log("uploaded product response", response.data.PdfData);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  useEffect(() => {
   
    fetchData();
  }, []);

  
  
  
  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/Dashboard/PDF/ExaminationDatesheet/${id}`
      );
      console.log("Delete successful");
       fetchData(); // Refresh the data after delete
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">Upload Examination Datesheets</h3>

      <div className="upload-form">
        <input
          onChange={(e) => SetpdfFile(e.target.files[0])}
          type="file"
          placeholder="Pdf File"
          className="upload-input"
        />
        <input
          onChange={(e) => SetpdfDetails(e.target.value)}
          type="text"
          placeholder="Pdf Name"
          className="upload-input"
        />
        <button onClick={submitHandlerforPDf} className="upload-button">
          <p>Upload</p>
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        {productdata.map((item) => (
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
                {/* <img
                  src={`${BASE_URL}/${item.productImage}`}
                  alt={item.productImage}
                  style={{ height: "100px", borderRadius: "10px 10px 0 0", width: "250px" }}
                /> */}
                            <a href={`${BASE_URL}/${item.pdfFile}`} >

              <img src={Pdficon} alt="PDF Icon" className="pdf-icon" />
              </a>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "50px" }}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{item.pdfDetails}</p>
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
