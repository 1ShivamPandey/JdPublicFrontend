import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CursorText from "./Components/CursorText";
import Slideshow from "./Components/Slideshow";
import Gallery from "./Screen/Gallery";
import Home from "./Screen/Home";
import PublicDisclosure from "./Screen/PublicDisclosure";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Sparkle from "react-sparkle";
import Home2 from "./Screen/Home2";
import Footer from "./Components/Footer";
import Dashboard from "./Screen/Dashboard/Dashboard";
import Examination from "./Screen/Examination";
import NotFound from "./Screen/NotFound";
import UploadGalleryImages from "./Screen/Dashboard/UploadGalleryImages";
import UploadYoutubeVideos from "./Screen/Dashboard/UploadYoutubeVideos";
import UploadMandatoryDisclosure from "./Screen/Dashboard/UploadMandatoryDisclosure";
import UploadExaminationDatesheets from "./Screen/Dashboard/UploadExaminationDatesheets";
import UploadSchoolActivities from "./Screen/Dashboard/UploadSchoolActivities";
import UploadSchoolAdventure from "./Screen/Dashboard/UploadSchoolAdventure";
import Login from "./Screen/Authentication/Login";
import SlidingImagesAdventure from "./Components/SlidingImagesSchoolAdventure";
import UploadSlideShow from "./Screen/Dashboard/UploadSlideShowImages";
const App = () => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fixedUsername = "jdpublicschool2013@gmail.com";
  const fixedPassword = "PASS22@pPASS22@p";

  useEffect(() => {
    const savedData = localStorage.getItem("userInfo");
    try {
      const parsedData = savedData ? JSON.parse(savedData) : null;
      console.log("Parsed Data:", parsedData);
      setUserData(parsedData);
      setIsAuthenticated(parsedData !== null);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      setUserData(null);
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === fixedUsername && password === fixedPassword) {
      const user = { username: fixedUsername };
      localStorage.setItem("userInfo", JSON.stringify(user));
      setUserData(user);
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserData(null);
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home2 />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/PublicDisclosure" element={<PublicDisclosure />} />
          <Route path="SlidingImagesAdventure" element={<SlidingImagesAdventure/>}/>
          <Route path="/Examination" element={<Examination />} />
          <Route path="/Login" element={isAuthenticated ? <Navigate to="/Dashboard" /> : <Login onLogin={handleLogin} />} />
          
          {isAuthenticated ? (
            <>
              <Route path="/Dashboard" element={<Dashboard onLogout={handleLogout} />} />
              <Route path="/UploadGalleryImages" element={<UploadGalleryImages />} />
              <Route path="/UploadYoutubeVideos" element={<UploadYoutubeVideos />} />
              <Route path="/UploadMandatoryDisclosure" element={<UploadMandatoryDisclosure />} />
              <Route path="/UploadExaminationDatesheets" element={<UploadExaminationDatesheets />} />
              <Route path="/UploadSchoolActivities" element={<UploadSchoolActivities />} />
              <Route path="/UploadSchoolAdventure" element={<UploadSchoolAdventure />} />
              <Route path="/UploadSlideShow" element={<UploadSlideShow />} />

            </>
          ) : (
            <>
              <Route path="/Dashboard" element={<Navigate to="/Login" />} />
              <Route path="/UploadGalleryImages" element={<Navigate to="/Login" />} />
              <Route path="/UploadYoutubeVideos" element={<Navigate to="/Login" />} />
              <Route path="/UploadMandatoryDisclosure" element={<Navigate to="/Login" />} />
              <Route path="/UploadExaminationDatesheets" element={<Navigate to="/Login" />} />
              <Route path="/UploadSchoolActivities" element={<Navigate to="/Login" />} />
              <Route path="/UploadSchoolAdventure" element={<Navigate to="/Login" />} />
              <Route path="/UploadSlideShow" element={<Navigate to="/Login" />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
