import stdStudy from '../images/girl-study.jpg';
import realtime from '../images/Realtime.gif';
import Happy from '../images/Happy.gif';
import bluepin from '../images/blue-icon.png';
export default function Different() {
  return (
    <div className="different">
      {/* <Heading primary="Unique" secondary="How are we different?" /> */}

      <div className="Different">
        <img src={stdStudy} alt="study" className="girl-study" />
        <div className="Content">
          <ul className="first-content">
            <li>
              <p>
                <img src={bluepin} alt="" />
                Our Live class program is a perfect mix of new age learning
                methods, conventional teaching and practice methods, to prepare
                Pre-Medical students.
              </p>
            </li>
            <li>
              <p>
                <img src={bluepin} alt="" /> TargetBased live Classes (NOT TIME
                BOUND) Live classes are Recorded for UNLIMITED revision
              </p>
            </li>
            {/* <li>
              <p>
                <img src={bluepin} style={{height: '23px', width: '22px'}} /> PARENTS can talk with teachers on a
                weekly basis. Daily Practice Papers (DPP), Previous year paper
                (PYP), Higher order thinking (HOT) questions provided for an
                excellent learning experience
              </p>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="Different">
        <div className="Content">
          {/* <Heading primary="Unique" secondary="How are we different?" /> */}
          {/* <ul>
            <li> */}
          <p className="second-content">
            <img src={bluepin} alt="" /> Media Rich engaging content.
            <br />
            <img src={bluepin} alt="" /> Batch size no more then 10 students.
            <br />
            <img src={bluepin} alt="" /> REAL TIME doubt clearance and 24x7
            availiblity on WhatsApp.
          </p>
          {/* </li>
          </ul> */}
        </div>
        <img src={realtime} alt="study" className="real-time" />
      </div>

      <div className="Different">
        <img src={Happy} alt="study" className="happy" />

        <div className="Content">
          {/* <Heading primary="Unique" secondary="How are we different?" /> */}
          <ul className="parent-talk">
            <li>
              <p>
                <img src={bluepin} alt="" /> PARENTS can talk with teachers on a
                weekly basis.
                <br />
                <img src={bluepin} alt="" /> Daily Practice Papers (DPP),
                Previous year paper (PYP), Higher order thinking (HOT) questions
                provided for an excellent learning experience
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
