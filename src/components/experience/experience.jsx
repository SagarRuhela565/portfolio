import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import "../experience/expertience.scss";
import { Col } from "react-bootstrap";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="sec-main sec-services  mb-lg-5 mb-4">
        <Container>
          <div>
            <h2 className="head-primary">MY EXPERINECE</h2>
          </div>
          <div className="row main-ex">
            <Col className="skill-set-wrappe" md={3}>
              <div className="list-skills">
                <div className="list-skill">
                  HTML/CSS
                  <div className="bar" style={{ "---progress": "80%" }} />
                </div>
                <div className="list-skill">
                  JavaScript
                  <div className="bar" style={{ "---progress": "36%" }} />
                </div>
                <div className="list-skill">
                  React
                  <div className="bar" style={{ "---progress": "36%" }} />
                </div>
                <div className="list-skill" style={{ "---progress": "85%" }}>
                  Git/GitHub
                  <div className="bar" />
                </div>
                <div className="list-skill" style={{ "---progress": "86%" }}>
                  Wordpress
                  <div className="bar" />
                </div>
                <div className="list-skill">
                  Bootstrap
                  <div className="bar" />
                </div>
                <div className="list-skill" style={{ "---progress": "70%" }}>
                  Tailwind
                  <div className="bar" />
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="row servi-wed-row">
                <Col lg={6} className="servi-wed">
                  <div>
                    <FontAwesomeIcon icon={faAward} />
                    <div className="servi-wed-txt">
                      <h4>Senior Web Designer</h4>
                      <p>Visions | Chandigarh</p>
                    </div>
                    <div className="date">
                      <h4>Full Time</h4>
                      <p>Apr, 2023 to May, 2025</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="servi-wed">
                  <div>
                    <FontAwesomeIcon icon={faAward} />
                    <div className="servi-wed-txt">
                      <h4>Web Designer</h4>
                      <p>Wavy Informatic | Chandigarh</p>
                    </div>
                    <div className="date">
                      <h4>Full Time</h4>
                      <p>Jul, 2021 to May, 2022 </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="servi-wed">
                  <div>
                    <FontAwesomeIcon icon={faAward} />
                    <div className="servi-wed-txt">
                      <h4>Web Designer</h4>
                      <p>Visions | Chandigarh</p>
                    </div>
                    <div className="date">
                      <h4>Full Time</h4>
                      <p>May, 2022 to Apr, 2023</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="servi-wed">
                  <div>
                    <FontAwesomeIcon icon={faAward} />
                    <div className="servi-wed-txt">
                      <h4>Junior Web Designer</h4>
                      <p>GreenTech | Chandigarh</p>
                    </div>
                    <div className="date">
                      <h4>Full Time</h4>
                      <p>Dec, 2020, to Jun, 2021</p>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Experience;
