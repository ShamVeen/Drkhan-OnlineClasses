import React from 'react';
import students from '../images/Students.png';
import '../Css/OurPride.css';
function OurPride() {
  return (
    <div className="pride">
      <h1>Our Prides</h1>
      <img src={students}style={{width: '1000px', borderRadius: '20px'}}/>
    </div>
  );
}

export default OurPride;
