import React from 'react';
import students from '../images/Students.png';
import '../Css/OurPride.css';
function OurPride() {
  return (
    <div className="pride">
      <h1>Our Prides</h1>
      <div className='pride-img'>
              <img src={students}/>

      </div>
    </div>
  );
}

export default OurPride;
