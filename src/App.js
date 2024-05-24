import "./App.css";
import React from "react";
import Header from "./Components/Header";
import CursorText from "./Components/CursorText";
import Slideshow from "./Components/Slideshow";
import Gallery from "./Screen/Gallery";
import Home from "./Screen/Home";
import PublicDisclosure from "./Screen/PublicDisclosure";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sparkle from "react-sparkle";

// const TEXTS = ["Mission", "Vision", "Mission"];

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const App = () => {
  // const [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <div>
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/PublicDisclosure" element={<PublicDisclosure />} />
      </Routes>
      </>

{/* 
      <div
        style={{ backgroundColor: "black", color: "white", height: "10000px" }}
      >
        <div style={{ paddingTop: "200px", textAlign: "center" }}>
          <CursorText />
        </div>

        <div style={{ marginTop: "100px" }}>
          <Slideshow />
        </div>

        <div style={{ display: "flex", justifyContent: "center"}}>
          <h1
            style={{
              textAlign: "center",
              color: "White",
              fontSize: "80px",
            }}
          >
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>

        <div
          style={{
            backgroundColor: "white",
           display: "flex",
           flexDirection:'column',
            // justifyContent: "center",
            // alignItems: "center",
            margin: "10px",
            backdropFilter: "blur(0.8px)",
            color:'black'
          }}
        >
        <p> Our mission is to  make students feel homey in School </p> 
          <p>Where they come happily in the morning becuase teachers shower love and care on them</p>
          <p>Where they become self disciplined, self confident and self motivator </p>
          <p>Where they feel sympathy for the fellow students and develop empathy for environment </p>
          <p>Where they get prepare with the courage to face the challenges of life</p>
          <p>Where their skills and abilities bloom in the leadership of developing faculty</p>
        </div>
      </div> 
 */}



    </div>
  );
};

export default App;
