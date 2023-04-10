import React from 'react';
import Heading from './Heading';
import { TbSquare } from 'react-icons/tb';
import { VscCircleFilled } from 'react-icons/vsc';
import '../Css/heading.css';
import '../Css/Unique.css';

function Unique(props) {
  return (
    <div className="Unique-main" id="service">
      <div className="heading">
        {/* <h2 className='primary-heading'>What Unique we have ....</h2> */}
        {/* <h3>BIOLOGY | PHYSICS | CHEMISTRY</h3>  */}
        {/* <h3>HOW ARE WE DIFFERENT?</h3> */}
        <Heading primary="Unique" secondary="How are we different?" />

        {/* <p className="primary-heading">{props.primary}</p>
            <h1>{props.secondary}</h1> */}
      </div>

      <div className="unique">
        <section className="wavy">
          <div className="wrapper">
            {/* <h2 className="section-title">Wavy</h2> */}
            <p>
              <VscCircleFilled style={{ fontSize: '17px' }} /> Dr. Khan Live
              class program is a perfect mix of new age learning methods,
              conventional teaching and practice methods to preparePre-Medical.
            </p>
          </div>
        </section>
        <section className="wavy">
          <div className="wrapper">
            <p>
              <VscCircleFilled style={{ fontSize: '14px' }} />
              Live Classes from Faculties who are Ph.D or IITan or SME and have
              more than 5 years of experience in NEET guidance.
              <br />
              <VscCircleFilled style={{ fontSize: '14px' }} /> TargetBased live
              Class NOT TIME BOUND.
              <br />
              <VscCircleFilled style={{ fontSize: '14px' }} /> Live classes are
              Recorded for UNLIMITED revision.
            </p>
          </div>
        </section>
        <section className="wavy">
          <div className="wrapper">
            {/* <h2 className="section-title">Wavy</h2> */}
            <p>
              <VscCircleFilled style={{ fontSize: '14px' }} /> Media Rich
              engaging content.
              <br />
              <VscCircleFilled style={{ fontSize: '14px' }} /> Batch size not
              more than 10 students.
              <br />
              <VscCircleFilled style={{ fontSize: '14px' }} /> REAL TIME doubt
              clearence and 24*7 availibility on WhatsApp for discussion.
            </p>
          </div>
        </section>
        <section className="wavy">
          <div className="wrapper">
            {/* <h2 className="section-title">Wavy</h2> */}
            <p>
              <VscCircleFilled style={{ fontSize: '14px' }} />
              PARENTS can talk with teachers on weekly basis.
              <br />
              <VscCircleFilled style={{ fontSize: '14px' }} /> Daily Practice
              Papers (DPP), Previous year paper(PYP), Higher order thinking
              (HOT) questions provided.
            </p>
          </div>
        </section>
        {/* <div className='unique-one'><VscCircleFilled color='darkgreen' style={{fontSize: '14px'}}/> Dr. Khan Live class program is a perfect mix of new age learning methods, conventional teaching and practice methods to prepare Pre-Medical.</div> */}
      </div>
    </div>
  );
}

export default Unique;
