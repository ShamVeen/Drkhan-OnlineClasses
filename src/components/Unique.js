import React from 'react';
import Heading from './Heading';
import { TbSquare } from 'react-icons/tb';
import { VscCircleFilled } from 'react-icons/vsc';
import '../Css/heading.css';
import '../Css/Unique.css';
import ContactUs from './ContactUs';

function Unique(props) {
  return (
    <>
      <div className="Unique-main">
        {/* <ContactUs/> */}
        <ContactUs />

        <div className="heading">
          {/* <ContactUs /> */}

          {/* <h2 className='primary-heading'>What Unique we have ....</h2> */}
          {/* <h3>BIOLOGY | PHYSICS | CHEMISTRY</h3>  */}
          {/* <h3>HOW ARE WE DIFFERENT?</h3> */}
          <h3>What is Unique About Us</h3>
          {/* <p className="primary-heading">{props.primary}</p>
            <h1>{props.secondary}</h1> */}
        </div>
        <div className="unique">
          <div className="row">
            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled style={{ fontSize: '17px' }} /> POWER in YOUR
                  Hand....Tuition Model for Fees payment also available...i.e.{' '}
                  <b>On monthly Basis..</b>
                </h4>
              </div>
            </div>

            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled style={{ fontSize: '17px' }} /> Dr. Khan Live
                  class program is a perfect mix of new age learning methods,
                  conventional teaching and practice methods to
                  preparePre-Medical.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled style={{ fontSize: '14px' }} />
                  Live Classes from Faculties who are Ph.D or IITan or SME and
                  have more than 5 years of experience in NEET guidance.
                  <br />
                  <VscCircleFilled style={{ fontSize: '14px' }} /> TargetBased
                  live Class NOT TIME BOUND.
                  <br />
                  <VscCircleFilled style={{ fontSize: '14px' }} /> Live classes
                  are Recorded for UNLIMITED revision.
                </h4>
              </div>
            </div>

            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled style={{ fontSize: '14px' }} /> Media Rich
                  engaging content.
                  <br />
                  <VscCircleFilled style={{ fontSize: '14px' }} /> Batch size
                  not more than 10 students.
                  <br />
                  <VscCircleFilled style={{ fontSize: '14px' }} /> REAL TIME
                  doubt clearence and 24*7 availibility on WhatsApp for
                  discussion.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled style={{ fontSize: '14px' }} />
                  PARENTS can talk with teachers on weekly basis.
                  <br />
                  <VscCircleFilled style={{ fontSize: '14px' }} /> Daily
                  Practice Papers (DPP), Previous year paper(PYP), Higher order
                  thinking (HOT) questions provided.
                </h4>
              </div>
            </div>
            <div className="column">
              <div className="unique-card">
                <h4>
                  <VscCircleFilled
                    color="darkgreen"
                    style={{ fontSize: '14px' }}
                  />{' '}
                  Dr. Khan Live class program is a perfect mix of new age
                  learning methods, conventional teaching and practice methods
                  to prepare Pre-Medical.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="column">
            <div className="unique-card">
              <h4>
                <VscCircleFilled style={{ fontSize: '17px' }} /> POWER in YOUR
                Hand....Tuition Model for Fees payment also available...i.e.{' '}
                <b>On monthly Basis..</b>
              </h4>
            </div>
          </div>
          <div className="column">
            <div className="unique-card">
              <h4>
                <VscCircleFilled style={{ fontSize: '17px' }} /> POWER in YOUR
                Hand....Tuition Model for Fees payment also available...i.e.{' '}
                <b>On monthly Basis..</b>
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="unique-card">
              <h4>
                <VscCircleFilled style={{ fontSize: '17px' }} /> POWER in YOUR
                Hand....Tuition Model for Fees payment also available...i.e.{' '}
                <b>On monthly Basis..</b>
              </h4>
            </div>
          </div>
          <div className="column">
            <div className="unique-card">
              <h4>
                <VscCircleFilled style={{ fontSize: '17px' }} /> POWER in YOUR
                Hand....Tuition Model for Fees payment also available...i.e.{' '}
                <b>On monthly Basis..</b>
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Unique;
