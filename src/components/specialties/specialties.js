import Container from 'react-bootstrap/Container';


//****************  css ***********************/
import '../specialties/specialties.scss';
//************  images ******************
import Sp1 from '../../assets/images/project-one.jpg';
import Sp2 from '../../assets/images/project-3.png';
import Sp3 from '../../assets/images/project-4.png';
import Sp4 from '../../assets/images/event-website.png';
import Sp5 from '../../assets/images/project-6.png';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const specialties = () => {
  return (
    <>
      <section className="specialties mb-lg-5 mb-4">
        <Container>
          <div className='define-head text-center my-lg-5 my-4'>
            <h3 className='font-primary'>Previously, I worked on related projects that helped me build strong experience and expertise.</h3>
            <p className='mb-0 fonts-3'>Based in Chandigarh.</p>
          </div>
          <h2 className="head-primary">MY SPECIALTIES</h2>
          <Row className="g-lg-4 g-3 justify-content-center">
            <Col md={4} className='specialties-wrapper'>
              <Link className='d-block' target='_blank' to="https://barsys.com/">
                <img src={Sp1} alt='' />
                <h4>Cocktail Machine</h4>
                <p className='fonts-3 mb-0'>The Barsys cocktail maker turns your home bar into a professional mixing experience </p>
              </Link>
            </Col>
            <Col md={4} className='specialties-wrapper'>
              <Link className='d-block' target='_blank' to="https://event-front-two.vercel.app/">
                <img src={Sp4} alt='' />
                <h4>Event Website</h4>
                <p className='fonts-3 mb-0'>GKU’s event platform delivers smooth, organized event management.</p>
              </Link>
            </Col>
            <Col md={4} target='_blank' className='specialties-wrapper'>
              <Link className='d-block' target='_blank' to="https://www.kilbirniehotel.co.uk/">
                <img src={Sp3} alt='' />
                <h4>Kilbirnie Hotel</h4>
                <p className='fonts-3 mb-0'>Looking for a relaxing, stress-free break, or activity filled family fun, whatever your style of holiday we are here for you.</p>
              </Link>
            </Col>
            <Col md={4} target='_blank' className='specialties-wrapper'>
              <Link className='d-block' target='_blank' to="https://www.geologicatraining.com/">
                <img src={Sp5} alt='' />
                <h4>Geologica Training</h4>
                <p className='fonts-3 mb-0'>Whether you seek field skills or advanced learning, our geological training supports your growth effectively.</p>
              </Link>
            </Col>
            <Col md={4} className='specialties-wrapper'>
              <Link className='d-block' target='_blank' to="https://www.teaism.com/">
                <img src={Sp2} alt='' />
                <h4>Tea Leaves Shop  </h4>
                <p className='fonts-3 mb-0'>This is a Tea Leaves Shop that sells a variety of tea leaves and also operates as a tea restaurant.</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default specialties;