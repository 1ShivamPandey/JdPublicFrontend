import React from 'react';

const Glasseffect = ({title}) => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.2)', // semi-transparent background
    backdropFilter: 'blur(10px)', // blur effect
    WebkitBackdropFilter: 'blur(10px)', // for Safari
    border: '1px solid rgba(255, 255, 255, 0.3)', // border
    borderRadius: '10px', // rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // subtle shadow
   // padding inside the card
    width: '250px', // width of the card
    margin: '20px auto', // center the card
    color: '#fff', // text color
    height:'80px'
  };

  return (
    <div style={glassStyle}>
      <h2 style={{textAlign:'center',}}>{title}</h2>
      {/* <p>This is an example of a glass effect using inline CSS in React.</p> */}
    </div>
  );
};

export default Glasseffect;
