import '../Css/Footer.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { AiFillYoutube } from 'react-icons/ai';
// import {BsWhatsapp} from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Router>
          <div className="row">
            <div className="footer-col">
              <h4>drkhanOnlineClasses</h4>
              <ul>
                <li>
                  <Link to="#program">home</Link>
                </li>
                <li>
                  <Link to="#about">About us</Link>
                </li>
                <li>
                  <Link to="#services">services</Link>
                </li>
                <li>
                  <Link to="#program">Our Program</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="#faq">
                    {/* <AiOutlineQuestionCircle /> */}
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="#callus">
                    call us
                    {/* <IoMdCall /> */}
                  </Link>
                </li>
                <li>
                  {/* <Link to="#header">chat with us</Link> */}
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/916265526339"
                  >
                    Chat with us
                    {/* <BsWhatsapp /> */}
                  </a>
                </li>
                {/* <li>
                <a href="#">order status</a>
              </li> */}
                {/* <li>
                <a href="#">payment options</a>
              </li> */}
              </ul>
            </div>
            <div className="footer-col">
              <h4>our offers</h4>
              <ul>
                <li>
                  <a href="#registration">Five Free class</a>
                </li>
                <li>
                  <a href="#">classroom Notes</a>
                </li>
                <li>
                  <a href="#">recording session</a>
                </li>
                <li>
                  <a href="#">practice papers</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                {/* <a href="https://www.facebook.com/profile.php?id=100091682525827">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                {/* <a href="#">
                <i className="fab fa-twitter"></i>
              </a> */}
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/916265526339"
                >
                  {/* <i className="fab fa-whatsapp"></i> */}
                  <BsWhatsapp />
                </a>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/dr_khan_classes/"
                >
                  {/* <i className="fab fa-instagram"></i> */}
                  <AiOutlineInstagram />
                </a>
                {/* <a href="https://www.linkedin.com/in/drkhan-classes-345753271/">
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCHB5HJg45yK5O61Je-F3dwA"
                >
                  <AiFillYoutube />
                </a>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </footer>
  );
}
