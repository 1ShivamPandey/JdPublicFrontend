import React, { useEffect, useState } from "react";
import Pdficon from "../Assets/Pdfimage.png";

import GENERALINFORMATION from "../Assets/mandatory/GENERAL INFORMATION.pdf";
import COPIESOFAFFILIATIONUPGRADATIONEXTENSIONLETTER from "../Assets/mandatory/COPIES OF AFFILIATION, UPGRADATION & EXTENSION LETTER.pdf";
import SOCIETIESOFRENEWALCERTIFICATE from "../Assets/mandatory/SOCIETIES OF RENEWAL CERTIFICATE.pdf";
import NOOBJECTIONCERTIFICATE from "../Assets/mandatory/NO OBJECTION CERTIFICATE.pdf";
import PRIMARYANDJUNIORAFFILIATION from "../Assets/mandatory/PRIMARY AND JUNIOR AFFILIATION.pdf";
import NATIONALBUILDINGSAFETYCERTIFICATE from "../Assets/mandatory/NATIONAL BUILDING SAFETY CERTIFICATE.pdf";
import FIRESAFETYCERTIFICATE from "../Assets/mandatory/FIRE SAFETY CERTIFICATE.pdf";
import DEOCERTIFICATE from "../Assets/mandatory/DEO CERTIFICATE.pdf";
import WATERANDHEALTHSANITATIONCERTIFICATE from "../Assets/mandatory/WATER AND HEALTH SANITATION CERTIFICATE.pdf";
import FEESTRUCTURE from "../Assets/mandatory/FEE STRUCTURE.pdf";
import ANNUALACADEMICCALENDER from "../Assets/mandatory/ANNUAL ACADEMIC CALENDER.pdf";
import SCHOOLMANAGEMENTCOMMITTEE from "../Assets/mandatory/SCHOOL MANAGEMENT COMMITTEE.pdf";
import PARENTSTEACHERSASSOCIATION from "../Assets/mandatory/PARENTS TEACHERS ASSOCIATION.pdf";
import LASTTHREEYEARRESULTOFBOARDEXAMINATION from "../Assets/mandatory/LAST THREE YEAR RESULT OF BOARD EXAMINATION.pdf";
import LANDCERTIFICATE from "../Assets/mandatory/LAND CERTIFICATE.pdf";
import STAFFSTATEMENT from "../Assets/mandatory/STAFF STATEMENT.pdf";
import STUDENTDETAILS from "../Assets/mandatory/STUDENT DETAILS.pdf";

import axios from "axios";
import { BASE_URL } from "../Constant";

export default function PublicDisclosure() {
  const [pdfDetails, SetpdfDetails] = useState("");
  const [pdfFile, SetpdfFile] = useState([]);
  const [productdata, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/Dashboard/MandatoryDisclosure/MandatoryDisclosure`
        );

        setProductData(response.data.PdfDataMandatory);
        console.log(
          "uploaded product response",
          response.data.PdfDataMandatory
        );

        const data = response.data.PdfDataMandatory;
        const details = data.map((product) => product.pdfDetails);
        const image = data.map((product) => product.pdfFile);

        SetpdfDetails(details);
        SetpdfFile(image);

        console.log("this is product image", image);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{marginTop:'150px'}}>
      <div className="disclosure-container">
        <h1  className="disclosure-title">Disclosure</h1>
        <div className="disclosure-box">
          <h1 className="disclosure-subtitle">Mandatory Public Disclosure</h1>
          <hr />
          <table className="disclosure-table">
            {[
              { name: "GENERAL INFORMATION", link: GENERALINFORMATION },
              { name: "COPIES OF AFFILIATION, UPGRADATION & EXTENSION LETTER", link: COPIESOFAFFILIATIONUPGRADATIONEXTENSIONLETTER },
              { name: "SOCIETIES OF RENEWAL CERTIFICATE", link: SOCIETIESOFRENEWALCERTIFICATE },
              { name: "NO OBJECTION CERTIFICATE", link: NOOBJECTIONCERTIFICATE },
              { name: "PRIMARY AND JUNIOR AFFILIATION", link: PRIMARYANDJUNIORAFFILIATION },
              { name: "NATIONAL BUILDING SAFETY CERTIFICATE", link: NATIONALBUILDINGSAFETYCERTIFICATE },
              { name: "FIRE SAFETY CERTIFICATE", link: FIRESAFETYCERTIFICATE },
              { name: "DEO CERTIFICATE", link: DEOCERTIFICATE },
              { name: "WATER AND HEALTH SANITATION CERTIFICATE", link: WATERANDHEALTHSANITATIONCERTIFICATE },
              { name: "FEE STRUCTURE", link: FEESTRUCTURE },
              { name: "ANNUAL ACADEMIC CALENDER", link: ANNUALACADEMICCALENDER },
              { name: "SCHOOL MANAGEMENT COMMITTEE", link: SCHOOLMANAGEMENTCOMMITTEE },
              { name: "PARENTS TEACHERS ASSOCIATION", link: PARENTSTEACHERSASSOCIATION },
              { name: "LAST THREE YEAR RESULT OF BOARD EXAMINATION", link: LASTTHREEYEARRESULTOFBOARDEXAMINATION },
              { name: "LAND CERTIFICATE", link: LANDCERTIFICATE },
              { name: "STAFF STATEMENT", link: STAFFSTATEMENT },
              { name: "STUDENT DETAILS", link: STUDENTDETAILS },
            ].map((item, index) => (
              <tr className="disclosure-row" key={index}>
                <td className="disclosure-detail">{item.name}</td>
                <td className="disclosure-link">
                  <img src={Pdficon} alt="PDF Icon" className="pdf-icon" />
                  <a href={item.link} className="download-link">Download</a>
                </td>
              </tr>
            ))}

            {productdata.map((item) => (
              <tr className="disclosure-row" key={item._id}>
                <td className="disclosure-detail">{item.pdfDetails}</td>
                <td className="disclosure-link">
                  <img src={Pdficon} alt="PDF Icon" className="pdf-icon" />
                  <a href={`${BASE_URL}/${item.pdfFile}`} className="download-link">Download</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <style jsx>{`
        .disclosure-container {
          margin: 100px 0;
        }
        .disclosure-title {
          color: black;
          text-align: center;
          font-weight: bold;
          font-size: 60px;
        }
        .disclosure-box {
          background-color: white;
          color: black;
          margin: 0 auto;
          padding: 20px;
          max-width: 1000px;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        }
        .disclosure-subtitle {
          text-align: center;
          font-family: monospace;
        }
        .disclosure-table {
          width: 100%;
          border-collapse: collapse;
        }
        .disclosure-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ccc;
          padding: 10px 0;
        }
        .disclosure-detail {
          flex: 1;
          font-weight: bold;
          margin-top: 20px;
        }
        .disclosure-link {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pdf-icon {
          height: 40px;
          width: 40px;
          margin-left: 10px;
        }
        .download-link {
          text-decoration: none;
          color: black;
        }

        @media (max-width: 768px) {
          .disclosure-box {
            margin: 0 20px;
          }
          .disclosure-title {
            font-size: 40px;
          }
          .disclosure-detail {
            font-size: 14px;
          }
          .pdf-icon {
            height: 30px;
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
}
