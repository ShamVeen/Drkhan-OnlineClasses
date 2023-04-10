import React from 'react';
import '../Css/AboutNeet.css';
import Accordion from 'react-bootstrap/Accordion';
import neetTable from '../images/neet-details-table.png';
import neetTable2 from '../images/neet-details-table2.png';
import neetTable3 from '../images/neet-details-table3.png';

function AboutNeet() {
  return (
    <div className='about-neet' id="neet">
      <div className="about-neet-title">
        <h2>NEET : Everything You Need to Know</h2>
      </div>
      <div className="about-neet-dropdown">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="neet-head">
              What is NEET 2022?
            </Accordion.Header>
            <Accordion.Body>
              <div className="neet-1" >
                Do you aim to become a doctor one day? Then the NEET or National
                Eligibility cum Entrance Test is a crucial exam for you. NEET is
                an entrance test whose scores decide admissions to the top
                medical colleges of India. NEET was earlier known as AIPMT (All
                India Pre-Medical Test). Every year, lakhs of students appear
                for the NEET exam with a dream to get into the best medical
                colleges in India where they can learn from expert doctors and
                get the best education and extensive hands on practice. Do you
                know that there were 16.1 lakh registrations for NEET UG 2021?
                Out of these 16 lakh registered candidates,15,44,275 appeared in
                the examination and 8,70, 074 candidates qualified for the
                examination.
                <br />
                Here are a few important details about NEET.
                <br />
                <img src={neetTable} style={{ height: '220px' }} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>NEET 2023 Important Dates</Accordion.Header>
            <Accordion.Body>
              Candidates must take note of the important dates related to the
              NEET examination.
              <br /> This will help you prepare for the exam with proper
              planning and organisation
              <br />
              <div style={{ marginTop: '20px' }}>
                <img src={neetTable2} style={{ height: '200px' }} />

                <img src={neetTable3} style={{ height: '200px' }} />
              </div>
              <br />
              <b>
                NTA HELP LINE- Helpline Number: +91-11-40759000, e-mail:
                neet@nta.nic.in Website www.nta.ac.in, https://neet.nta.nic.in/
              </b>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>NEET Application Procedure</Accordion.Header>
            <Accordion.Body>
              Candidates have to apply for NEET online on the official website
              of National Testing Agency.
              <br /> Here are the steps to apply for NEET UG:
              <br />
              1. Visit the NTA website for NEET (https://neet.nta.nic.in/)
              <br />
              2. Click on Registration for NEET (UG). (You will be redirected to
              the application website)
              <br />
              3. Click on new registration <br />
              4. Read the instructions carefully and enter your credentials as
              required. <br />
              5. You will have to fill in personal details, exam details, and
              exam city preferences, and upload your signature and photograph.{' '}
              <br />
              6. At last, you have to pay the examination fee through
              credit/debit card, net banking, Paytm and UPI. <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>NEET Eligibility Criteria</Accordion.Header>
            <Accordion.Body>
              NEET eligibility criteria help in identifying the eligible
              candidates who can appear in the examination. If you are an Indian
              citizen, NRI (Non-Resident Indian), PIO (Person of Indian Origin),
              OCI (Overseas Citizen of India) or a foreign national you can
              appear in the NEET exam if you meet the eligibility criteria. NEET
              exam is mandatory for medical aspirants who want to study medical
              courses in India. Medical aspirants who wish to study abroad but
              plan to come back to India for medical practice also have to
              appear in NEET.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutNeet;
