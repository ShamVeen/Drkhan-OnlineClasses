import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../Css/StudentThought.css';
// import wahibkhan from '../images/Wahib-Khan.mp4';
function StudentThought() {
  const [youtubeUrl, setYoutubeUrl] = useState(
    'https://www.youtube.com/shorts/wYSLdJsxArI'
  );
  const [youtubeUrl2, setYoutubeUrl2] = useState(
    'https://www.youtube.com/shorts/gvhCBu9tG8w'
  );

  return (
    <div className="student-thought">
      <Container>
        <h2 style={{paddingTop: '40px', fontSize: '2.3rem'}}>Our Student Thoughts</h2>
        <div className="student-video">
          {/* <iframe height="400" width="500"    
src="https://www.youtube.com/shorts/embed/wYSLdJsxArI?autoplay">   
</iframe>   */}

          <div>
            <ReactPlayer url={youtubeUrl} className="video-1" />
            <p>Dr. Wahib Khan</p>
          </div>

          <div>
            <ReactPlayer url={youtubeUrl2} className="video-2" />
            <p>Dr. Nashrah Rehman</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StudentThought;
