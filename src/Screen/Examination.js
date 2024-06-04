import React, { useEffect, useState } from "react";
import Pdficon from "../Assets/Pdfimage.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Constant";

export default function Examination() {
  const [productdata, setProductData] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, []);

  return (
    <div style={{ padding: "21px" }}>
      <div style={{ marginTop: "150px", marginBottom: "100px" }}>
        <h1
          style={{
            color: "Black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Examination Datesheet
        </h1>

        <div
          style={{
            backgroundColor: "white",
            color: "black",
            margin: "0 auto",
            maxWidth: "800px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
            Datesheet
          </h1>
          <hr></hr>

          <div>
            <table
              style={{
                width: "100%",
                tableLayout: "fixed",
              }}
            >
              <tbody>
                {productdata.map((item) => (
                  <tr
                    key={item._id}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                      padding: "10px 0",
                    }}
                  >
                    <td
                      style={{
                        width: "70%",
                        fontWeight: "bold",
                      }}
                    >
                      {item.pdfDetails}
                    </td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                        }}
                        to={`${BASE_URL}/${item.pdfFile}`}
                        target="_blank"
                      >
                        <img
                          src={Pdficon}
                          style={{
                            height: "40px",
                            width: "40px",
                            marginRight: "10px",
                          }}
                          alt="PDF icon"
                        />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .datesheet-container {
            margin: 0 20px;
          }
          .datesheet-title {
            font-size: 1.5em;
          }
          .datesheet-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .datesheet-item td {
            width: 100%;
          }
          .datesheet-download {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
