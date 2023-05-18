import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Different from './components/Different';
import Heading from './components/Heading';
import Card from './components/Card';
import Slider from './components/Testimonials';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './App.css';

import khan from './images/3.png';
import thr2 from './images/2.png';
import naureen from './images/1.png';
import OurPride from './components/OurPride';
import Unique from './components/Unique';
import { BrowserRouter } from 'react-router-dom';
import StudentThought from './components/StudentThought';
import FaqArea from './components/FaqArea';
import AboutNeet from './components/AboutNeet';
import Registration from './components/Registration';

function App() {
  return (
    <>
        <Header />
      <Navbar />
      <MainPage content="" />

      <Heading primary="Meet Our Faculties" secondary="Learn From The Best" />
      {/* <div className="teachers" id="teachers">
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
        <Card
          url={thr2}
          // name="Er. HarshVardhan Singh"
          experience="B. E. (MECHANICAL)
                                                          GATE QUALIFIED
                                                          5 YEARS TEACHING
                                                          EXPERIENCE"
        />
        <Card
          url={naureen}
          // name="Dr. Abdul Majid Khan"
          experience="Ph.D. (Chemistry) IISER, Bhopal, JRF, SRF
5 Years teaching experience
"
        />
      </div> */}
      <AboutUs />

      <Registration />
      {/* <ContactUs/> */}

      <Unique />

      <Different />

      {/* <div id="testimonials" style={{ marginLeft: '-10px' }}> */}
        <Heading primary="Testimonials" secondary="What Our Students Say" />
        {/* </div> */}
        <Slider />
      {/* </div> */}
      <div>
        <OurPride />
        <StudentThought />
      </div>
      {/* <MainPage content="Book Now First 5 Classes Free" /> */}

      <FaqArea />
      
      {/* <div style={{ marginTop: '100px' }}> */}
        <AboutNeet />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
