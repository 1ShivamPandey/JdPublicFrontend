// src/UploadBox.js

import React from 'react';
import '../css/Uploadbox.css';

const UploadBox = ({ title }) => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <div className="upload-box">
      <div className="upload-content">
        <input type="file" className="upload-input" onChange={handleFileUpload} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default UploadBox;
