// import React from "react";
// import CursorText from "../Components/CursorText";
// import Slideshow from "../Components/Slideshow";
// import TextTransition, { presets } from "react-text-transition";
// import Glasseffect from "../Components/Glasseffect";
// import globe from "../Assets/globe.png";
// import manager from "../Assets/manager.JPG";
// import Principal from "../Assets/Principal.JPG";
// import front from "../Assets/front.jpg";
// import sideview from "../Assets/sideview.jpg";
// import teachers from "../Assets/teachers.jpg";
// import girl from "../Assets/girl.jpg";
// import { Link } from "react-router-dom";

// import computerslab from "../Assets/computerlab.jpg";
// import sciencelab from "../Assets/sciencelab.jpg";
// import library from "../Assets/library.jpg";
// import classroom from "../Assets/classroom.jpeg";
// import mathslab from "../Assets/mathslab.jpg";

// export default function Home() {
  
//   return (

    
//     <div style={{ backgroundColor: "black", color: "white", height: "4500px" }}>

//       <div
//         style={{
//           marginLeft: "150px",
//           paddingTop: "250px",
//           zIndex: "1",
//           position: "absolute",
//         }}
//       >
//         <CursorText />
//       </div>

//       <div
//         style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}
//       >
//         <img
//           style={{
//             borderRadius: "200px",
//             marginTop: "120px",
//             boxShadow:
//               "rgba(211, 211, 211, 0.4) -5px 5px, rgba(211, 211, 211, 0.3) -10px 10px, rgba(211, 211, 211, 0.2) -15px 15px, rgba(211, 211, 211, 0.1) -20px 20px, rgba(211, 211, 211, 0.05) -25px 25px",
//           }}
//           src={globe}
//         />
//       </div>

//       <div style={{ marginTop: "100px" }}>
//         <Slideshow />
//       </div>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <h1 style={{ fontSize: "50px" }}>Mission</h1>
//       </div>

//       <div
//         style={{
//           backgroundColor: "black",
//           display: "flex",
//           flexDirection: "column",
//           // justifyContent: "center",
//           // alignItems: "center",
//           marginRight: "250px",
//           marginLeft: "250px",
//           textAlign: "center",
//           backdropFilter: "blur(0.8px)",
//           color: "white",
//           borderRadius: "10px",
//           boxShadow:
//             "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
//         }}
//       >
//         <p>
//           {" "}
//           <b>1.</b> Our mission is to make students feel homey in School{" "}
//         </p>
//         <p>
//           <b>2.</b>Where they come happily in the morning becuase teachers
//           shower love and care on them
//         </p>
//         <p>
//           <b>2.</b>Where they become self disciplined, self confident and self
//           motivator{" "}
//         </p>
//         <p>
//           <b>4.</b> Where they feel sympathy for the fellow students and develop
//           empathy for environment
//         </p>
//         <p>
//           <b>5.</b> Where they get prepare with the courage to face the
//           challenges of life
//         </p>
//         <p>
//           <b>6.</b> Where their skills and abilities bloom in the leadership of
//           developing faculty
//         </p>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <h1 style={{ fontSize: "50px" }}>Vision</h1>
//       </div>

//       <div
//         style={{
//           backgroundColor: "black",
//           display: "flex",
//           flexDirection: "column",
//           // justifyContent: "center",
//           // alignItems: "center",
//           marginRight: "250px",
//           marginLeft: "250px",
//           textAlign: "center",
//           backdropFilter: "blur(0.8px)",
//           color: "white",
//           borderRadius: "10px",
//           boxShadow:
//             "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
//         }}
//       >
//         <p>
//           our Vision is to create an excelllent institution where young mind may
//           lit up by experimental learning,spirit of <br></br>
//           enquiry and scientifical behaviour. Our aim is to prepare student with
//           catalyst of changing . <br></br>
//           Who not only able to maintain themselves in the field of competition
//           but also lead without compromising with <br></br>
//           their moral values and principles.
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-around",
//         }}
//       >
//         <div style={{ marginTop: "100px" }}>
//           <Glasseffect
//             title="Manager"
//             p1="Dear Parents/Teachers/Students, a very warm welcome for visiting J D Public School website."
//             p2="I have been associated with this institution since 2013."
//             p3="Education plays a very vital role and works as a solid foundation in an individual's career and intellectual development."
//             p4="COVID 19 taught us lot of new things and made us realize the potential of our teachers who took on the challenge of teaching online, with full zest and courage."
//             p5="I take this opportunity to thank all the staff members and the Management for inspiring, guiding and supporting each other towards betterment of this institution."
//             image={manager}
//             p6="Surender Kumar"
//           />
//         </div>

//         <div style={{ marginTop: "100px" }}>
//           <Glasseffect
//             title="Principal"
//             p1="Dear Students and Parents"
//             p2="Welcome to another exciting school year! Our dedicated staff and faculty are committed to"
//             p3="providing a supportive and enriching environment where every student can thrive. "
//             p4="We look forward to partnering with you to ensure a successful and rewarding academic journey. "
//             p5="Let's work together to make this year our best one yet"
//             image={Principal}
//             p6="Nimala Vashist"
//           />
//         </div>
//       </div>

//       <div
//         style={{
//           margin: "50px",
//           padding: "10px",
//           borderRadius: "10px",
//           backgroundColor: "white",
//           boxShadow:
//             "rgba(173, 216, 230, 0.4) -5px 5px, rgba(173, 216, 230, 0.3) -10px 10px, rgba(173, 216, 230, 0.2) -15px 15px, rgba(173, 216, 230, 0.1) -20px 20px, rgba(173, 216, 230, 0.05) -25px 25px",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "black" }}>About Us</h1>
//         <p style={{ color: "black" }}>
//           J D Public School Santoshi Vihar, Loni, Ghaziabad, is an institution
//           run by J D SHIKSHA SAMITI, Santoshi Vihar, Loni, Ghaziabad has started
//           since 2012. The Foundation stone of our school was laid by Her
//           Excellency Mrs. Santosh Devi on Thursday, the 17th May of 2012.The
//           school has nearly 750 students with a staff of 30 and is privileged to
//           have a state-of-the-art complex on 6088 sq. meter campus with in
//           Santoshi Vihar, Loni, Ghaziabad .The school is up to class XII and
//           symbolises top class excellence in academics, sports, cultural
//           activities and other spheres of educational arena.The school provides
//           holistic and all- round comprehensive quality education based on our
//           rich Vedic culture. The curriculum inculcates among the students a
//           strong foundation to adapt themselves to the rapidly changing world
//           and to thrive on challenges and competitions. The Student Academic
//           Performances have been consistently excellent every year.
//         </p>
//       </div>

//       <div style={{ margin: "10px" }}>
//         <h1 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
//           FACILITIES
//         </h1>

//         <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'
//         }}>

//         <div>
//           <div
//             style={{
//               backgroundColor: "white",
//               width: "300px",
//               height: "450px",
//               borderRadius: "10px",
//             }}
//           >
//             <h1 style={{ color: "black", textAlign: "center" }}>
//               Computers Lab
//             </h1>
//             <img
//               src={computerslab}
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 width: "180px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 boxShadow:
//                   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//               }}
//             />
//             <p style={{color:'black',margin:'10px',fontWeight:'bold'}}>Amazing smart classes and computer based test provide better understanding to
// your child. Audio- Video o lectures is also a effective to build concept which only we are provided to
// your child.</p>
//           </div>
//         </div>


//         <div>
//           <div
//             style={{
//               backgroundColor: "white",
//               width: "300px",
//               height: "450px",
//               borderRadius: "10px",
//             }}
//           >
//             <h1 style={{ color: "black", textAlign: "center" }}>
//               Science Lab
//             </h1>
//             <img
//               src={sciencelab}
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 width: "180px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 boxShadow:
//                   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//               }}
//             />
//             <p style={{color:'black',margin:'10px',fontWeight:'bold'}}>
//             Science is not a theory subject. It based on Practical So we giving the opportunity to the student to
// perform the chemical reactions at own in the supervision of teachers and some precautions. Science
// lab provide a system to understand complex concept and principles easily.

//             </p>
//           </div>
//         </div>


//         <div>
//           <div
//             style={{
//               backgroundColor: "white",
//               width: "300px",
//               height: "450px",
//               borderRadius: "10px",
//             }}
//           >
//             <h1 style={{ color: "black", textAlign: "center" }}>
//               Library 
//             </h1>
//             <img
//               src={library}
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 width: "180px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 boxShadow:
//                   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//               }}
//             />
//             <p style={{color:'black',margin:'10px',fontWeight:'bold'}}>A silence environment is essential to study which is not available in our home unfortunately.
// Because of this we committed to Providing a Superb library for books reading to the students. It
// enhance the Understanding power Students of the and Boost their Vocabulary also.</p>
//           </div>
//         </div>

//         <div>
//           <div
//             style={{
//               backgroundColor: "white",
//               width: "300px",
//               height: "450px",
//               borderRadius: "10px",
//             }}
//           >
//             <h1 style={{ color: "black", textAlign: "center" }}>
//               Maths Lab
//             </h1>
//             <img
//               src={mathslab}
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 width: "180px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 boxShadow:
//                   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//               }}
//             />
//             <p style={{color:'black',margin:'10px',fontWeight:'bold'}}>
//             Student have a opportunities to build your daily math calculations through the math lab classes.
// Which provide daily Quiz and MCQ based test, practice paper for home. Its shows humongous
// change in the student life.
//             </p>
//           </div>
//         </div>

//         </div>

//       </div>

//       <h1
//         style={{
//           color: "white",
//           textAlign: "center",
//           fontWeight: "bolder",
//           marginTop: "100px",
//         }}
//       >
//         School Activities
//       </h1>

//       <div
//         style={{
//           margin: "10px",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           marginTop: "50px",
//         }}
//       >
//         <div style={{ position: "relative" }}>
//           <img
//             src={front}
//             style={{
//               height: "500px",
//               width: "350px",
//               borderRadius: "10px",
//               opacity: "0.9",
//             }}
//           />
//           <h1
//             style={{
//               position: "absolute",
//               top: "100px",
//               zIndex: "1",
//               fontSize: "24px",
//               fontWeight: "bold",
//               left: "110px",
//               border: "5px solid white",
//               color: "white",
//               padding: "5px",
//               borderRadius: "10px",
//               width: "120px",
//               textAlign: "center",
//             }}
//           >
//             Learn
//           </h1>
//         </div>
//         <div style={{ position: "relative" }}>
//           <img
//             src={girl}
//             style={{
//               height: "500px",
//               width: "350px",
//               borderRadius: "10px",
//               opacity: "0.9",
//             }}
//           />
//           <h1
//             style={{
//               position: "absolute",
//               top: "100px",
//               zIndex: "1",
//               fontSize: "24px",
//               fontWeight: "bold",
//               left: "110px",
//               border: "5px solid white",
//               color: "white",
//               padding: "5px",
//               borderRadius: "10px",
//               fontFamily: "monospace",
//               width: "120px",
//             }}
//           >
//             Adventure
//           </h1>
//         </div>

//         <div style={{ position: "relative" }}>
//           <img
//             src={front}
//             style={{
//               height: "500px",
//               width: "350px",
//               borderRadius: "10px",
//               opacity: "0.9",
//             }}
//           />
//           <h1
//             style={{
//               position: "absolute",
//               top: "100px",
//               zIndex: "1",
//               fontSize: "24px",
//               fontWeight: "bold",
//               left: "110px",
//               border: "5px solid white",
//               color: "white",
//               padding: "5px",
//               borderRadius: "10px",
//               fontFamily: "monospace",
//               width: "120px",
//             }}
//           >
//             Adventure
//           </h1>
//         </div>
//       </div>


//       {/* FOOTER */}
//       <div
//         style={{
//           backgroundColor: "white",
//           height: "300px",
//           width: "100%",
//           color: "black",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-around",
//           marginTop: "50px",
//         }}
//       >
//         <div>
//           <h1 style={{ marginTop: "50px" }}>QUICK LINKS</h1>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               Home{" "}
//             </Link>
//           </div>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               About us
//             </Link>
//           </div>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               Examination
//             </Link>
//           </div>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               Admission
//             </Link>
//           </div>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               Photo Gallery
//             </Link>
//           </div>

//           <div>
//             <Link style={{ color: "black", textDecoration: "none" }} to="">
//               Contact us
//             </Link>
//           </div>
//         </div>

//         <div>
//           <h1 style={{ marginTop: "50px" }}>CONTACT US</h1>

//           <p>🗺 Santoshi Vihar, Loni Ghaziabad</p>
//           <p>📞 +(91) 874 586 7747</p>
//           <p>✉ contact@jdpublicschool.com</p>
//         </div>
//       </div>



//     </div>



//   );
// }
