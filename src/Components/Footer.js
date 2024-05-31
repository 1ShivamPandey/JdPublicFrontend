import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    
    <div className="Footer">
    <div>
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>
        QUICK LINKS
      </h1>
      <div style={{textAlign:'center'}}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          Home  
        </Link>
      </div>

      <div style={{textAlign:'center'}}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          About us
        </Link>
      </div>

      <div style={{textAlign:'center'}}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          Examination
        </Link>
      </div>

      <div style={{textAlign:'center'}}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          Admission
        </Link>
      </div>

      <div style={{textAlign:'center'}}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          Photo Gallery
        </Link>
      </div>

      <div style={{textAlign:'center'}} >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to=""
        >
          Contact us
        </Link>
      </div>
    </div>

    <div>
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>CONTACT US</h1>

      <p style={{textAlign:'center'}}>🗺 Santoshi Vihar, Loni Ghaziabad</p>
      <p  style={{textAlign:'center'}}>📞 +(91) 874 586 7747</p>
      <p style={{textAlign:'center'}}>✉ contact@jdpublicschool.com</p>
    </div>
  </div>
  
  )
}
