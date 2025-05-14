import { Container } from "react-bootstrap";
import "../footer/footer.scss";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <div className="footer-div">
          <div className="ftr-text">
            <p>© {currentYear} . All rights reserved.</p>
          </div>
          <div style={{ width: "50%" }}>
            <ul className="ftr-social">
              <li>
                <a className="ftr-youtube"
                  target="_blank"
                  href="https://www.instagram.com/sagar_ruhela565/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a className="ftr-fb"
                  target="_blank"
                  href="https://www.facebook.com/share/16CWifX77Z/"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a className="ftr-gmail" href="mailto:sagarruhela565@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="tel:7906358938" className="ftr-youtube"> 
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
