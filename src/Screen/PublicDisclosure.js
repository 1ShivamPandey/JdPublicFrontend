import React from "react";
// import { PasswordResponses } from "react-pdf";
import Pdficon from "../Assets/Pdfimage.png";
import Testpdf from "../Assets/Pdfs/Test.pdf";

import GENERALINFORMATION from "../Assets/mandatory/GENERAL INFORMATION.pdf"
import COPIESOFAFFILIATIONUPGRADATIONEXTENSIONLETTER from "../Assets/mandatory/COPIES OF AFFILIATION, UPGRADATION & EXTENSION LETTER.pdf"
import SOCIETIESOFRENEWALCERTIFICATE from "../Assets/mandatory/SOCIETIES OF RENEWAL CERTIFICATE.pdf"
import NOOBJECTIONCERTIFICATE from "../Assets/mandatory/NO OBJECTION CERTIFICATE.pdf"
import PRIMARYANDJUNIORAFFILIATION from "../Assets/mandatory/PRIMARY AND JUNIOR AFFILIATION.pdf"
import NATIONALBUILDINGSAFETYCERTIFICATE from "../Assets/mandatory/NATIONAL BUILDING SAFETY CERTIFICATE.pdf"
import FIRESAFETYCERTIFICATE from "../Assets/mandatory/FIRE SAFETY CERTIFICATE.pdf"
import DEOCERTIFICATE from "../Assets/mandatory/DEO CERTIFICATE.pdf"
import WATERANDHEALTHSANITATIONCERTIFICATE from "../Assets/mandatory/WATER AND HEALTH SANITATION CERTIFICATE.pdf"
import FEESTRUCTURE from "../Assets/mandatory/FEE STRUCTURE.pdf"
import ANNUALACADEMICCALENDER from "../Assets/mandatory/ANNUAL ACADEMIC CALENDER.pdf"
import SCHOOLMANAGEMENTCOMMITTEE from "../Assets/mandatory/SCHOOL MANAGEMENT COMMITTEE.pdf"
import PARENTSTEACHERSASSOCIATION from "../Assets/mandatory/PARENTS TEACHERS ASSOCIATION.pdf"
import LASTTHREEYEARRESULTOFBOARDEXAMINATION from "../Assets/mandatory/LAST THREE YEAR RESULT OF BOARD EXAMINATION.pdf"
import LANDCERTIFICATE from "../Assets/mandatory/LAND CERTIFICATE.pdf"
import STAFFSTATEMENT from "../Assets/mandatory/STAFF STATEMENT.pdf"
import STUDENTDETAILS from "../Assets/mandatory/STUDENT DETAILS.pdf"


import { Link } from "react-router-dom";
export default function PublicDisclosure() {
  return (
    <div>
      <div style={{ marginTop: "100px", marginBottom:'100px' }}>
        <h1
          style={{
            color: "Black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          Disclosure
        </h1>

        <div
          style={{
            backgroundColor: "white",
            color: "black",
            marginRight: "250px",
            marginLeft: "250px",
            // height: "400px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            // boxShadow:"rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
          }}
        >
          <h1 style={{ textAlign: "center", fontFamily: "monospace", }}>
            Mandatory Public Disclosure
          </h1>
          <hr></hr>

          <div>
            <table
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                tableLayout: "fixed",
              }}
            >


              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  GENERAL INFORMATION
                </td>
                
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

                  <a style={{textDecoration:'none',color:'black'}} href={GENERALINFORMATION}>Download</a>
                </td>
                
              </tr>

            
              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  COPIES OF AFFILIATION, UPGRADATION & EXTENSION LETTER
                </td>

                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={COPIESOFAFFILIATIONUPGRADATIONEXTENSIONLETTER}>Download</a>
                </td>
                

              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  SOCIETIES OF RENEWAL CERTIFICATE
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={SOCIETIESOFRENEWALCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  NO OBJECTION CERTIFICATE
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={NOOBJECTIONCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  PRIMARY AND JUNIOR AFFILIATION
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={PRIMARYANDJUNIORAFFILIATION}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  NATIONAL BUILDING SAFETY CERTIFICATE
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={NATIONALBUILDINGSAFETYCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  FIRE SAFETY CERTIFICATE
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={FIRESAFETYCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  DEO CERTIFICATE
                </td>
           
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={DEOCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  WATER AND HEALTH SANITATION CERTIFICATE
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={WATERANDHEALTHSANITATIONCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  FEE STRUCTURE
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={FEESTRUCTURE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  ANNUAL ACADEMIC CALENDER
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={ANNUALACADEMICCALENDER}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'

                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  SCHOOL MANAGEMENT COMMITTEE
                </td>
             
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={SCHOOLMANAGEMENTCOMMITTEE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  PARENTS TEACHERS ASSOCIATION
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={PARENTSTEACHERSASSOCIATION}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  LAST THREE YEAR RESULT OF BOARD EXAMINATION
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={LASTTHREEYEARRESULTOFBOARDEXAMINATION}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  LAND CERTIFICATE
                </td>
             
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={LANDCERTIFICATE}>Download</a>
                </td>
                
              </tr>

              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  STAFF STATEMENT
                </td>
              
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={STAFFSTATEMENT}>Download</a>
                </td>
                
              </tr>


              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottom:'1px solid #ccc'
                }}
              >
                <td style={{ width: "500px", fontWeight: "bold",marginTop:'20px'}}>
                  STUDENT DETAILS
                </td>
               
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={Pdficon}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "10px",
                    }}
                  />

<a style={{textDecoration:'none',color:'black'}} href={STUDENTDETAILS}>Download</a>
                </td>
                
              </tr>



            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
