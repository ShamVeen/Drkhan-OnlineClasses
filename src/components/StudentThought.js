import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../Css/StudentThought.css';
// import wahibkhan from '../images/Wahib-Khan.mp4';
function StudentThought() {
  const [youtubeUrl, setYoutubeUrl] = useState(
    'https://youtube.com/shorts/c4JgKK65AZU'
  );
  const [youtubeUrl2, setYoutubeUrl2] = useState(
    'https://www.youtube.com/shorts/gvhCBu9tG8w'
  );

  return (
    <div className="student-thought">
      <Container>
        <h2>
          Our Student Thoughts
        </h2>
        <div className="student-video">
          {/* <iframe height="400" width="500"    
src="https://www.youtube.com/shorts/embed/wYSLdJsxArI?autoplay">   
</iframe>   */}

          <div>
            <div className='wahib-talk'><ReactPlayer url={youtubeUrl} className="video-1" /></div>
            <p>Dr. Wahib Khan</p>
          </div>

          <div>
          <div className="nashrah-talk"> <ReactPlayer url={youtubeUrl2} className="video-2" /></div>
            <p>Dr. Nashrah Rehman</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StudentThought;
