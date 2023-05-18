import React from 'react';
// import harsh from '../images/2.png';
import khan from '../images/3.png';
import thr2 from '../images/2.png';
import naureen from '../images/1.png';

import '../Css/AboutUs.css';
import Card from './Card';
function AboutUs(props) {
  return (
    <div id="about">
      <div className="about-container">
        {/* <h2 style={{ fontSize: '45px', color: 'darkgreen' }}>About Us</h2> */}
        {/* <div className="aboutus">
          <p>
            Dr. Khan has been teaching Zoology and Botany since 2015 producing
            good ranks in NEET examination. It was going well...
            <br />
            then the Corona outbreak provide opportunity of teaching online in a
            multinational EdTech to the Overseas students. <br />
            Learned to make animation, PPTs, new teaching module and become a
            "Pro" in the online teaching and exam analysis.
            <br />
            <span>
              The start of online teaching journey was a huge success
              academically. And now{' '}
              <span style={{ color: 'black', fontSize: '22px' }}>Dr. Khan</span>{' '}
              is bouncing back with a team of top teachers <br />
              who have produced ranks below 1000 in NEET <br />
              and JEE examinations
            </span>
          </p>
        </div> */}

        <div className="about-one">
          {' '}
          <div className="about-drkhan">
            <p>
              Dr. Khan has been teaching Zoology and Botany since 2015 producing
              <br />
              good ranks in NEET examination. It was going well...{' '}
              <span>
                <b>
                  then the <br />
                  Corona outbreak provided opportunity of teaching online in a
                  multinational
                  <br /> EdTech to the Overseas students.
                </b>
              </span>{' '}
              Learned to make animation, PPTs, new <br />
              teaching module and become a "Pro" in the online teaching and exam
              analysis. <br />
              <b>
                <span>
                  The start of online teaching journey was a huge success
                  academically. <br />
                  And now{' '}
                  <span style={{ color: 'black', fontSize: '22px' }}>
                    Dr. Khan
                  </span>{' '}
                  is bouncing back with a team of top teachers who have
                  <br /> produced ranks below 1000 in NEET and JEE examinations
                </span>
              </b>
            </p>
          </div>
          <div className="drkhan">
            {/* <img src={drkhan} /> */}
            <Card
              url={khan}
              // name="Dr. Abdul Majid Khan"
              experience="M.SC., SRF, PH.D.
                                (LIFESCIENCE)
                                AIPMT, GATE AND NET
                                QUALIFIED
                                7 YEARS TEACHING
                                EXPERIENCE
"
            />
          </div>
        </div>
        <div>
          <div className="about-two">
            <div className="harsh-img">
              {/* <img src={harsh} /> */}
              <Card
                url={thr2}
                // name="Er. HarshVardhan Singh"
                experience="B. E. (MECHANICAL)
                                                          GATE QUALIFIED
                                                          5 YEARS TEACHING
                                                          EXPERIENCE"
              />
            </div>
            <div className="about-harsh">
              <p>
                From opening a TV set at the age of 7 to installing the <br />
                biggest engineering and Aircon systems for AIIMS , <br />
                this mechanical engineer turned teacher has a knack of <br />
                explaining everything in physics relating it to real world{' '}
                <br />
                examples. Numerous selections of his students into IIT <br />
                and AIIMS are his accolades. <br />
                <span>
                  {' '}
                  <b>
                    His physics classes will never let you down on endorphins.
                  </b>
                </span>
              </p>
            </div>
          </div>
          <div className="about-three">
            <div className="about-naureen">
              <p>
                With Gold medals in graduation and Post-graduation
                <br /> she started her teaching career along Ph.D. curriculum.
                <br />
                <span>
                  <b>
                    {' '}
                    She used her live practical experience to developed <br />
                    Unique method to teach Concepts in the most simple <br />
                    way.
                  </b>
                </span>{' '}
                <span>
                  <b>
                    Her solution-oriented classroom teaching <br />
                    and management style is very famous among students.
                  </b>
                </span>
              </p>
            </div>
            <div className="naureen-img">
              {/* <img src={naureen} /> */}
              <Card
                url={naureen}
                // name="Dr. Abdul Majid Khan"
                experience="Ph.D. (Chemistry) IISER, Bhopal, JRF, SRF
5 Years teaching experience
"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
