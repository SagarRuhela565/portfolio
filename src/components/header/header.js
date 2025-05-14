import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';





//****************  css ***********************/
import '../header/header.scss';
//************  images ******************
import logo from '../../assets/images/sagar-profile-img.jpg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
  const [bodyClass, setBodyClass] = useState('');

  const toggleBodyClass = () => {
    setBodyClass(bodyClass === '' ? 'menu-opan' : '');
  };
  document.body.classList = bodyClass;
  return (
    <>
    <header className="header bg-primary py-lg-4 py-3">
      <Navbar expand="md" className="py-0">
        <Container>
          <Link to="/" className='navbar-brand'><img src={logo}/>
          <span className="name">Sagar Ruhela</span></Link>
          {/* <Navbar.Toggle  onClick={toggleBodyClass}className='hamburger' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </Nav>
            <ul className="social-list">
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faEnvelope}/></a></li>
            </ul>
          </Navbar.Collapse> */}
           <ul className="social-list">
              <li><a target="_blank" href="https://www.instagram.com/sagar_ruhela565/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a target='_blank' href="https://www.facebook.com/share/16CWifX77Z/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="mailto:sagarruhela565@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
              <li><a href="tel:7906358938"><FontAwesomeIcon icon={faPhone}/></a></li>
            </ul>
        </Container>
      </Navbar>
    </header>
    </>
  );
}

export default Header;