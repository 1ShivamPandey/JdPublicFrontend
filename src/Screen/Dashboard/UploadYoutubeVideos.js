import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constant";
import axios from "axios";
import DeleteIcon from "../../../src/Assets/Delete.png";
import "../../css/common.css";

export default function UploadYoutubeVideos() {
  const [YoutubeLink, Setyoutubelink] = useState("");
  const [YoutubeDetails, Setyoutubedetails] = useState("");

  const [youtubeData, SetYoutubeData] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState("");
  // const [youtubeDetails, Setyoutubedetails] = useState("");
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
      alert("Youtube video uploaded successfully 🎉");
      Setyoutubedetails("");
      Setyoutubelink("");
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };
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

      // console.log("this is product image", image);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  useEffect(() => {
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

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/Dashboard/youtube/link/${id}`
      );
      console.log("Delete successful");
      fetchData(); // Refresh the data after delete
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">Upload Youtube Videos</h3>

      <div className="upload-form">
        <input
          onChange={(e) => Setyoutubedetails(e.target.value)}
          value={YoutubeDetails}
          type="text"
          placeholder="Details"
          className="upload-input"
        />
        <input
          onChange={(e) => Setyoutubelink(e.target.value)}
          type="text"
          placeholder="Link"
          className="upload-input"
        />
        <button onClick={SubmitYoutubeLink} className="upload-button">
          <p>Upload</p>
        </button>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {youtubeData.map((item) => (
            <div key={item._id}>
              <div
                style={{
                  width: "250px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "250px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
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

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    height: "50px",
                  }}
                >
                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    {item.YoutubeDetails}
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
    </div>
  );
}
