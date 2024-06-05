import React, { useEffect, useState } from "react";
import "../App.css";
import CursorText from "../Components/CursorText";
import globe from "../Assets/globe.png";
import manager from "../Assets/manager.JPG";
import Principal from "../Assets/Principal.JPG";
import Slideshow from "../Components/Slideshow";
import Glasseffect from "../Components/Glasseffect";

import computerslab from "../Assets/computerlab.jpeg";
import sciencelab from "../Assets/sciencelab.jpeg";
import library from "../Assets/library.jpeg";
import classroom from "../Assets/classroom.jpeg";
import mathslab from "../Assets/mathslab.jpg";
import smartclassroom from "../Assets/smartclassroom.jpeg";
import front from "../Assets/front.jpg";
import girl from "../Assets/girl.jpg";
import { Link } from "react-router-dom";
import ActiveSlideshow from "../Components/ActivitiesSlideshow";
import "../Components/Header";
import axios from "axios";
import { BASE_URL } from "../Constant";
import Cardflip from "../Components/Cardflip";
import CommentCards from "../Components/Card";
import SlidingImages from "../Components/SlidingImages";
import Cardswipe from "../Components/Cardswipe";
import SlidingImagesAdventure from "../Components/SlidingImagesSchoolAdventure";
import AutomaticSlideshow from "../Components/AutomaticSlideshow";
export default function Home2() {
  const [productData, setProductData] = useState([]);
  const [image, setproductImage] = useState([]);
  const [productDe, setProductDetails] = useState("");

  const [productadventure, setadventureProductData] = useState([]);
  const [AdventureDetails, setadventureProductDetails] = useState("");
  const [adventureImage, setadventureproductImage] = useState([]);
  //const [imageadventure,set]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/school/SchoolActivities`
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
          `${BASE_URL}/api/Dashboard/school/SchoolAdventure`
        );

        setadventureProductData(response.data.ProductDataAdventure);
        console.log(
          "uploaded product response",
          response.data.ProductDataAdventure
        );

        const data = response.data.ProductDataAdventure;
        const details = data.map((product) => product.productDetails);
        const image = data.map((product) => product.productImage);

        setadventureProductDetails(details);
        setadventureproductImage(image);

        console.log("this is product image", image);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginTop: "150px", zIndex: "1" }}>
          <CursorText />
        </div>
        {/* 
      <div style={{position:'fixed'}}>
        <img
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            boxShadow:
              "rgba(211, 211, 211, 0.4) -5px 5px, rgba(211, 211, 211, 0.3) -10px 10px, rgba(211, 211, 211, 0.2) -15px 15px, rgba(211, 211, 211, 0.1) -20px 20px, rgba(211, 211, 211, 0.05) -25px 25px",
          }}
          src={globe}
        />
      </div> */}
      </div>

      <Slideshow />

      {/* MISSION */}
      <div>
        <h1 className="mission-word">Mission</h1>

        <div className="pink-card">
          <p>
            <b>1. </b> Our mission is to make students feel homey in School
          </p>
          <p>
            <b>2. </b> Where they come happily in the morning becuase teachers
            shower love and care on them
          </p>
          <p>
            <b>2. </b> Where they become self disciplined, self confident and
            self motivator
          </p>
          <p>
            <b>4. </b> Where they feel sympathy for the fellow students and
            develop empathy for environment
          </p>
          <p>
            <b>5. </b> Where they get prepare with the courage to face the
            challenges of life
          </p>
          <p>
            <b>6. </b> Where their skills and abilities bloom in the leadership
            of developing faculty
          </p>
        </div>
      </div>

      {/* VISION */}
      <div>
        <h1 className="mission-word">Vision</h1>

        <div className="pink-card">
          <p>
            Our Vision is to create an excelllent institution where young mind
            may lit up by experimental learning,spirit of <br></br>
            enquiry and scientifical behaviour. Our aim is to prepare student
            with catalyst of changing . <br></br>
            Who not only able to maintain themselves in the field of competition
            but also lead without compromising with <br></br>
            their moral values and principles.
          </p>
        </div>
      </div>

      {/* glasseffect */}
      {/* <div className="glassEffect-alignment">
        <div style={{ marginTop: "100px" }}>
          <Glasseffect
            title="Manager"
            p1="Dear Parents/Teachers/Students, a very warm welcome for visiting J D Public School website."
            p2="I have been associated with this institution since 2013."
            p3="Education plays a very vital role and works as a solid foundation in an individual's career and intellectual development."
            p4="COVID 19 taught us lot of new things and made us realize the potential of our teachers who took on the challenge of teaching online, with full zest and courage."
            p5="I take this opportunity to thank all the staff members and the Management for inspiring, guiding and supporting each other towards betterment of this institution."
            image={manager}
            p6="Surender Kumar"
          />
        </div>

        <div style={{ marginTop: "100px" }}>
          <Glasseffect
            title="Principal"
            p1="Dear Students and Parents"
            p2="Welcome to another exciting school year! Our dedicated staff and faculty are committed to"
            p3="providing a supportive and enriching environment where every student can thrive. "
            p4="We look forward to partnering with you to ensure a successful and rewarding academic journey. "
            p5="Let's work together to make this year our best one yet"
            image={Principal}
            p6="Nirmala Vashist"
          />
        </div>
      </div> */}
      <div style={{marginTop:'50px'}}>
<CommentCards/>
</div>
      {/* About us  */}
      <div
        id="about-us"
        style={{
          margin: "20px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "lightblue",

          boxShadow:
            "rgba(173, 216, 230, 0.4) -5px 5px, rgba(173, 216, 230, 0.3) -10px 10px, rgba(173, 216, 230, 0.2) -15px 15px, rgba(173, 216, 230, 0.1) -20px 20px, rgba(173, 216, 230, 0.05) -25px 25px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "black" }}>About Us</h1>
        <p style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }}>
          J D Public School Santoshi Vihar, Loni, Ghaziabad, is an institution
          run by J D SHIKSHA SAMITI, Santoshi Vihar, Loni, Ghaziabad has started
          since 2012. The Foundation stone of our school was laid by Her
          Excellency Mrs. Santosh Devi on Thursday, the 17th May of 2012.The
          school has nearly 750 students with a staff of 30 and is privileged to
          have a state-of-the-art complex on 6088 sq. meter campus with in
          Santoshi Vihar, Loni, Ghaziabad .<br></br>The school is up to class
          XII and symbolises top class excellence in academics, sports, cultural
          activities and other spheres of educational arena.The school provides
          holistic and all- round comprehensive quality education based on our
          rich Vedic culture. The curriculum inculcates among the students a
          strong foundation to adapt themselves to the rapidly changing world
          and to thrive on challenges and competitions. The Student Academic
          Performances have been consistently excellent every year.
        </p>
      </div>

      {/* Facilities */}

{/*       
      <div>
        <h1
          style={{
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          FACILITIES
        </h1>

        <div className="Facilities-direction">
          <div>
            <div className="Facilities-container">
              <h1 style={{ color: "black", textAlign: "center" }}>
                Computers Lab
              </h1>
              <img
                src={computerslab}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "180px",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              />
              <p
                style={{
                  color: "black",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                Amazing smart classes and computer based test provide better
                understanding to your child. Audio- Video o lectures is also a
                effective to build concept which only we are provided to your
                child.
              </p>
            </div>
          </div>

          <div>
            <div className="Facilities-container">
              <h1 style={{ color: "black", textAlign: "center" }}>
                Science Lab
              </h1>
              <img
                src={sciencelab}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "180px",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              />
              <p
                style={{
                  color: "black",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                Science is not a theory subject. It based on Practical So we
                giving the opportunity to the student to perform the chemical
                reactions at own in the supervision of teachers and some
                precautions. Science lab provide a system to understand complex
                concept and principles easily.
              </p>
            </div>
          </div>

          <div>
            <div className="Facilities-container">
              <h1 style={{ color: "black", textAlign: "center" }}>Library</h1>
              <img
                src={library}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "180px",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              />
              <p
                style={{
                  color: "black",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                A silence environment is essential to study which is not
                available in our home unfortunately. Because of this we
                committed to Providing a Superb library for books reading to the
                students. It enhance the Understanding power Students of the and
                Boost their Vocabulary also.
              </p>
            </div>
          </div>

          <div>
            <div className="Facilities-container">
              <h1 style={{ color: "black", textAlign: "center" }}>Maths Lab</h1>
              <img
                src={mathslab}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "180px",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              />
              <p
                style={{
                  color: "black",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                Student have a opportunities to build your daily math
                calculations through the math lab classes. Which provide daily
                Quiz and MCQ based test, practice paper for home. Its shows
                humongous change in the student life.
              </p>
            </div>
          </div>

          <div>
            <div className="Facilities-container">
              <h1 style={{ color: "black", textAlign: "center" }}>
                Smart classroom
              </h1>
              <img
                src={smartclassroom}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "180px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              />
              <p
                style={{
                  color: "black",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                JD Public School's Smart Class transforms traditional learning
                with state-of-the-art technology, providing interactive digital
                lessons that enhance understanding and retention.
              </p>
            </div>
          </div>
        </div>
      </div> */}
<div>
  <h1
    style={{
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "50px",
    }}
  >
    FACILITIES
  </h1>

  <div className="Facilities-direction">
    <div className="Facilities-container">
      <h1 style={{ color: "black", textAlign: "center" }}>Computers Lab</h1>
      <img
        src={computerslab}
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "200px",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      />
      <p style={{ color: "black", margin: "10px", fontFamily: "cursive" }}>
        Amazing smart classes and computer based test provide better
        understanding to your child. Audio- Video lectures are also effective in
        building concepts which only we provide to your child.
      </p>
    </div>

    <div className="Facilities-container">
      <h1 style={{ color: "black", textAlign: "center" }}>Science Lab</h1>
      <img
        src={sciencelab}
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "200px",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      />
      <p style={{ color: "black", margin: "10px", fontFamily: "cursive" }}>
        Science is not a theory subject. It is based on practicals. We give
        students the opportunity to perform chemical reactions on their own
        under the supervision of teachers and with some precautions. 
        easily.
      </p>
    </div>

    <div className="Facilities-container">
      <h1 style={{ color: "black", textAlign: "center" }}>Library</h1>
      <img
        src={library}
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "200px",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      />
      <p style={{ color: "black", margin: "10px", fontFamily: "cursive" }}>
        A silent environment is essential for study, which is not always
        available at home. Because of this, we are committed to providing a
        superb library for book reading. It enhances students' understanding and
        boosts their vocabulary.
      </p>
    </div>

    <div className="Facilities-container">
      <h1 style={{ color: "black", textAlign: "center" }}>Maths Lab</h1>
      <img
        src={mathslab}
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "200px",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      />
      <p style={{ color: "black", margin: "10px", fontFamily: "cursive" }}>
        Students have the opportunity to build their daily math calculations
        through math lab classes, which provide daily quizzes and MCQ-based
        tests and practice papers for home. This has shown a significant change
        in students' lives.
      </p>
    </div>

    <div className="Facilities-container">
      <h1 style={{ color: "black", textAlign: "center" }}>
        Smart Classroom
      </h1>
      <img
        src={smartclassroom}
        style={{
          display: "block",
          margin: "0 auto",
          width: "180px",
          height: "auto",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      />
      <p style={{ color: "black", margin: "10px", fontFamily: "cursive" }}>
        JD Public School's Smart Class transforms traditional learning with
        state-of-the-art technology. Interactive lessons, visual aids, and
        digital tools create an engaging and effective educational experience.
        Join us to experience the future of education today.
      </p>
    </div>
  </div>
</div>

      <div>
        <h1
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bolder",
            marginTop: "50px",
          }}
        >
          School Activities
        </h1>

        {/* <ActiveSlideshow/> */}
{/* 
        <div className="School-Activities-mobile-res">
          <div className="School-Activities-Direction"> */}
            {/* {productData.map((item) => (
              <div key={item._id} style={{ position: "relative" }}>
                <img
                  src={`${BASE_URL}/${item.productImage}`}
                  className="School-activities-image"
                />
                <h1 className="School-activities-h1">{item.productDetails}</h1>
              </div>
            ))} */}

            {/* <div style={{ position: "relative" }}>
                <img src={front} className="School-activities-image" />
                <h1 className="School-activities-h1">Learn</h1>
              </div> */}

            {/* <div style={{ position: "relative" }}>
              <img src={girl} className="School-activities-image" />
              <h1 className="School-activities-h1">Adventure</h1>
            </div> */}

            {/* <div style={{ position: "relative" }}>
                <img src={front} className="School-activities-image" />
                <h1 className="School-activities-h1">Adventure</h1>
              </div> */}
          {/* </div> */}
        {/* </div> */}
        <SlidingImages/>

      </div>

      <div>
        <h1
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bolder",
            marginTop: "50px",
          }}
        >
          School Adventure
        </h1>

        {/* <div className="School-Activities-mobile-res">
          <div className="School-Activities-Direction">
            {productData.map((item) => (
              <div key={item._id} style={{ position: "relative" }}>
                <img
                  src={`${BASE_URL}/${item.productImage}`}
                  className="School-activities-image"
                />
                <h1 className="School-activities-h1">{item.productDetails}</h1>
              </div>
            ))}
          </div>
        </div> */}

        <SlidingImagesAdventure/>
      </div>    

{/* <AutomaticSlideshow/> */}

{/* <Cardswipe/> */}
{/* <SlidingImages/> */}

      {/* <Cardflip/> */}
      {/* <CommentCards/> */}
    </div>
  );
}
