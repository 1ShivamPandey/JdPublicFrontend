import React from "react";
import CursorText from "../Components/CursorText";
import Slideshow from "../Components/Slideshow";
import TextTransition, { presets } from "react-text-transition";
import Glasseffect from "../Components/Glasseffect";
export default function Home() {
  const TEXTS = ["Mission", "Vision", "Mission"];

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      style={{ backgroundColor: "black", color: "white", height: "10000px" }}
    >
      <div style={{ paddingTop: "200px", textAlign: "center" }}>
        <CursorText />
      </div>

      <div style={{ marginTop: "100px" }}>
        <Slideshow />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlign: "center",
            color: "White",
            fontSize: "80px",
            //   backgroundColor:'red',
            borderRadius: "100px",
            border: "1px solid white",
            padding: "20px",
            height: "60px",
            alignContent: "center",
          }}
        >
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </div>

      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          marginRight: "250px",
          marginLeft: "250px",
          textAlign: "center",
          backdropFilter: "blur(0.8px)",
          color: "white",
          boxShadow:
            "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
        }}
      >
        <p> 1. Our mission is to make students feel homey in School </p>
        <p>
          2. Where they come happily in the morning becuase teachers shower love
          and care on them
        </p>
        <p>
          3. Where they become self disciplined, self confident and self
          motivator{" "}
        </p>
        <p>
          4. Where they feel sympathy for the fellow students and develop
          empathy for environment
        </p>
        <p>
          5. Where they get prepare with the courage to face the challenges of
          life
        </p>
        <p>
          6. Where their skills and abilities bloom in the leadership of
          developing faculty
        </p>
      </div>

<div>
      <Glasseffect/>

      </div>
    </div>
  );
}
