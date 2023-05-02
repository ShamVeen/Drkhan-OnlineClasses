import study from '../images/khan.png';
import drkhan from '../images/3.png';
import neet from '../images/NEET.gif';
import freeliveclass from '../images/Free Live class.gif';
import rightTick from '../images/right-tick.jpg';
import weeklyImage from '../images/weekly-image.png';
import weeklyimage from '../images/main-page-list.gif';
export default function MainPage(props) {
  return (
    <>
      <div className="main-page" id="program">
        <div className="left-container">
          {props.content.length <= 0 && (
            <div>
              <h2 className='left-head'>
                Prepare for <span className="bg-light">NEET</span> &{' '}
                <span className="bg-light">CUET</span>
              </h2>
              <h1 className='drkhan'>
                with <span id="name">Dr.Khan</span>
              </h1>
              {/* <h3>
                <span style={{ color: 'orange' }}>Two Year</span> Classroom
                teachings for
                <span style={{ color: 'orange' }}>
                  NEET / AIIMS & <br />
                  JIPMER
                </span>
                along with <span style={{ color: 'orange' }}>
                  11th
                </span> and <span style={{ color: 'orange' }}>12th</span> Board
                syllabus
              </h3> */}

              <div className="weekly-img">
                {' '}
                <img src={weeklyimage} alt="weekly" />
              </div>
              {/* <h3 style={{ marginTop: '110px' }}>
                <img src={rightTick} style={{ height: '20px' }} />{' '}
                <span style={{ fontSize: '20px' }}>
                  Five days a week Classes
                </span>
                <br />
                <img src={rightTick} style={{ height: '20px' }} />{' '}
                <span style={{ fontSize: '20px' }}>Three hours a day.</span>
                <br />
                <img src={rightTick} style={{ height: '20px' }} />{' '}
                <span style={{ fontSize: '20px' }}>
                  1+ hr Physics , Chemistry and Biology
                </span>
              </h3> */}
              
            </div>
          )}
          {props.content.length > 0 && (
            <div>
              <h1>{props.content}</h1>
            </div>
          )}
          {/* <button className="button-static" style={{ marginTop: '10px' }}>
          Book Now
        </button> */}
          {/* <div className='free-class'><img src={freeliveclass}/></div>  */}
        </div>
        {props.content.length <= 0 && (
          <div className="right-container">
            <img src={neet} alt="study" className="neet-img"/>
            {/* <span>
              M.SC., SRF, PH.D. (LIFESCIENCE) AIPMT, <br/>GATE AND NET QUALIFIED 7
              YEARS TEACHING EXPERIENCE
            </span> */}
          </div>
        )}
      </div>
      {/* <img src={freeliveclass} style={{height: '50px'}}/> */}
    </>
  );
}
