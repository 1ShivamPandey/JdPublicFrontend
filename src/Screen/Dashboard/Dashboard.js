import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant";
const Dashboard = () => {
  const [productDetails, SetproductDetails] = useState("");
  const [productImage, SetproductImage] = useState("");
  const [pdfDetails, SetpdfDetails] = useState("");
  const [pdfFile, SetpdfFile] = useState("");
  const [YoutubeLink, Setyoutubelink] = useState("");
  const [YoutubeDetails, Setyoutubedetails] = useState("");

  const submitHandler = async (e) => {
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
        `${BASE_URL}/api/Dashboard/GalleryDataUpload`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

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
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandlerMandatoryPDf = async (e) => {
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
        `${BASE_URL}/api/Dashboard/MandatoryDisclosure/MandatoryDisclosure`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  const SubmitYoutubeLink = async (e) => {
    e.preventDefault();
    if (!YoutubeLink || !YoutubeDetails) {
      console.log("data is not filled");
      return;
    }
    try {
      const formData = new FormData();

      formData.append("YoutubeLink", YoutubeLink);
      formData.append("YoutubeDetails", YoutubeDetails);

      const response = await axios.post(
        `${BASE_URL}/api/Dashboard/youtube/link`,
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  const submitSchoolActivities = async (e) => {
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
        `${BASE_URL}/api/Dashboard/school/SchoolActivities`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <h1 style={{ fontSize: "bold", textAlign: "center" }}> Dashboard </h1>
      <hr></hr>

      <h3 style={{ fontSize: "bold", textAlign: "center", color: "blue" }}>
        Upload Gallery Images
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px auto",
        }}
      >
        <div>
          <input
            onChange={(e) => SetproductDetails(e.target.value)}
            value={productDetails}
            type="text"
            placeholder="Details"
          />
        </div>
        <div>
          <input
            onChange={(e) => SetproductImage(e.target.files[0])}
            type="file"
          />
        </div>
        <div>
          <button onClick={submitHandler}>
            <p>Upload</p>
          </button>
        </div>
      </div>
      <hr></hr>

      <h3 style={{ fontSize: "bold", textAlign: "center", color: "blue" }}>
        Upload Examination Datesheets
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px auto",
        }}
      >
        <div>
          <input
            onChange={(e) => SetpdfDetails(e.target.value)}
            value={pdfDetails}
            type="text"
            placeholder="Pdf Details"
          />
        </div>
        <div>
          <input onChange={(e) => SetpdfFile(e.target.files[0])} type="file" />
        </div>
        <div>
          <button onClick={submitHandlerforPDf}>
            <p>Upload</p>
          </button>
        </div>
      </div>

      <hr></hr>

      <h3 style={{ fontSize: "bold", textAlign: "center", color: "blue" }}>
        Mandatory Pdf
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px auto",
        }}
      >
        <div>
          <input
            onChange={(e) => SetpdfDetails(e.target.value)}
            value={pdfDetails}
            type="text"
            placeholder="Pdf Details"
          />
        </div>
        <div>
          <input onChange={(e) => SetpdfFile(e.target.files[0])} type="file" />
        </div>
        <div>
          <button onClick={submitHandlerMandatoryPDf}>
            <p>Upload</p>
          </button>
        </div>
      </div>

      <hr></hr>
      <h3 style={{ fontSize: "bold", textAlign: "center", color: "blue" }}>
        Upload Youtube videos
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px auto",
        }}
      >
        <div>
          <input
            onChange={(e) => Setyoutubelink(e.target.value)}
            value={YoutubeLink}
            type="text"
            placeholder="Youtube Video link"
          />
        </div>
        <div>
          <input
            onChange={(e) => Setyoutubedetails(e.target.value)}
            value={YoutubeDetails}
            type="text"
            placeholder="Youtube Details"
          />
        </div>
        <div>
          <button onClick={SubmitYoutubeLink}>
            <p>Upload</p>
          </button>
        </div>
      </div>

      <hr></hr>
      <h3 style={{ fontSize: "bold", textAlign: "center", color: "blue" }}>
        Upload School Activities Photo
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px auto",
        }}
      >
        <div>
          <input
            onChange={(e) => SetproductDetails(e.target.value)}
            value={productDetails}
            type="text"
            placeholder="Details"
          />
        </div>
        <div>
          <input
            onChange={(e) => SetproductImage(e.target.files[0])}
            type="file"
          />
        </div>
        <div>
          <button onClick={submitSchoolActivities}>
            <p>Upload</p>
          </button>
        </div>
      </div>

    </div>
  );
};
export default Dashboard;
