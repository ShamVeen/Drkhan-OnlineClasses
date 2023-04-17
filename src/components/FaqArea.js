import React from 'react';
import '../Css/FaqArea.css';
import Accordion from 'react-bootstrap/Accordion';

const FaqArea = () => {
  return (
    <div className="faq-area" id="faq">
      <div className="faq-title">
        <h2>FAQs</h2>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
        
        <Accordion.Item eventKey="0">
            <Accordion.Header>
              What will be the mode of payment for FEE?
            </Accordion.Header>
            <Accordion.Body>
              <span style={{ color: 'orange' }}>
                Fees will be on Monthly basis. So YOU have full Power. No traps.
                No Strings Attached
              </span>
              .<br /> Fees can be sent via UPI or directly to account of Dr.
              Khan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              For Which Entrance examinations Dr. KHAN Online Classes is
              preparing students?
            </Accordion.Header>
            <Accordion.Body>
              <span>Dr. KHAN</span> Online Classes prepares students for any
              medical entrance exam across globe like{' '}
              <span style={{ color: 'orange' }}>
                NEET along with 11th and 12th.
              </span>{' '}
              Further Dr. KHAN Online Classes teaches for{' '}
              <span style={{ color: 'orange' }}>CUET</span> (for entrance in top
              Indian Universities for other Graduation courses of science).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How will the Online Classes be run? Will the student be able to
              interact with the teacher?
            </Accordion.Header>
            <Accordion.Body>
              Our online classes are totally interactive in nature where teacher
              ensures that teacher and students are on the same level of
              teaching and understanding. Student can interact with teacher via
              headphone/earphone or chat on the online classroom platform. This
              is possible Due to very small batch size of{' '}
              <span style={{ color: 'orange' }}>NOT MORE THAN 10 STUDENT</span> in
              a class. Dr. Khan classes brings the learning at the students
              desktop at the{' '}
              <span style={{ color: 'orange' }}>CONVENIENCE AND SECURITY</span> of
              your house. Dr. KHAN Online Classes ensures the student can get
              the unmatched guidance from IITians/Doctors/Ph.Ds to each student
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What will be the timings of the Online Classes?
            </Accordion.Header>
            <Accordion.Body>
              Dr. KHAN Online Classes assures the timing of the classes fall
              after the school timings. Some courses allow more customized
              timing options.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are the requirements to take Online Classes without any
              problem?
            </Accordion.Header>
            <Accordion.Body>
              The students have to arrange the following equipment for smooth
              running of live and interactive classes: <br />o A Laptop/Desktop{' '}
              <br />o Headphone/Microphone <br />o Internet connection with min.
              2 mbps in LAN connection else 4G through wi-fi <br />o Webcam
              (optional)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              What type of Study Material will be given to students?
            </Accordion.Header>
            <Accordion.Body>
              Study material, Daily Practice Paper and Tests in form of PDF for
              different subjects (exclusively designed by IITians/Doctors) are
              made available to the students. The study material is send to the
              students on Telegram or WhatsApp (mainly).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              How to arrange a Free Class with us?
            </Accordion.Header>
            <Accordion.Body>
              The free class is just one step farther to the student .The
              student has to register on{' '}
              <span style={{ color: 'orange' }}>Dr.KhanOnline Classes</span> by
              filling the Form above or just talking to us on given number
              above. We will talk to the parents or students for their
              customized requirement. On the basis of the requirement given, our
              team arranges the free class with Dr, Khan or his team. The
              student can interact on chat on WhatsApp or just Call with the
              IITian/Doctor and can ask any doubt. The IITian/Doctors will serve
              as a mentor and counselor along with being a teacher.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Are the sessions recorded? How can I access to the recordings?
            </Accordion.Header>
            <Accordion.Body>
              The Live lectures get recorded simultaneously and the link gets
              <span style={{ color: 'orange' }}>
                available only on request to teacher
              </span>
              . This is to ensure students consistency in class and take class
              seriously. Kids should not make a habit of watching recorded
              session.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              What are the benefits of Dr.KhanOnline Classes?{' '}
            </Accordion.Header>
            <Accordion.Body>
            • Dr.KhanOnline Classes brings the learning at the
              students' desktop, so the student can get the unmatched guidance
              from IITians and Doctors in secure and comfortable environment of
              his home. It increases his confidence level and concentration.
              <span style={{ color: 'orange' }}> Mental Peace to parents.</span>
              <br /> • Through One to one coaching the students get proper
              attention from the faculty. The easy interaction with the mentor
              helps student to get an overall development.
              <br /> • The batch sizes are very small small{' '}
              <span style={{ color: 'orange' }}>(not exceeding 10),</span>
              which allows the teacher to now each student personally. This
              helps the student to open up with the teacher and discuss his
              doubts more clearly. The friendly environment created in this way
              leads to a clear mind. Also the small focused group makes student
              more competitive towards his goal.
              <br /> • The biggest advantage of Dr.KhanOnline Classes way of
              teaching as compared to a conventional model is that here all the
              live classes start from fundamental of that topic.
              <br /> • Dr. Khan believes that the doubt removal is an integral
              part of any course preparation which should be handled properly.
              No doubt should be unanswered and therefore we have a continuous
              doubt removal process through regular doubt removal sessions and
              the 24*7 online discussion. Unlike the conventional mode where
              student have to wait for the next scheduled class to clear his
              doubts, Dr.KhanOnline Classes manages the online discussion on
              Telegram and whatsApp where student can post his doubts anytime
              and get the solution.
              <br /> • Dr. Khan firmly believes that parental control and
              monitoring helps in the growth of the student. With the various
              features offered, the parents get an upper hand here <br />o In
              the complete course, Dr.KhanOnline Classes call for{' '}
              <span style={{ color: 'orange' }}>
                monthly parent teacher meeting
              </span>{' '}
              where parents directly interact with the teacher and discuss any
              doubts / changes to improve the performance of student.
              <br /> o Unlike the conventional coaching classes, Dr.KhanOnline
              Classes allows parents to participate in class and{' '}
              <span style={{ color: 'orange' }}>
                check the quality of teaching
              </span>
              .
              <br /> o Dr.KhanOnline Classes informs parents about 3 consecutive
              class bunks and any single test bunk. The parents are contacted
              and asked for explanation.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqArea;
