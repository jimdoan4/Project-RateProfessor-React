import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <div
            className="container-fluid text-center"
            id="header-container"
          ></div>
        </div>

        <div id="event">
          <Container className="text-center">
            <h3
              className="main-page-subtitle text-center"
              style={{ fontWeight: "bold" }}
            >
              LEARN ABOUT OUR PRODUCTS
            </h3>
            <Container>
              <Row className="text-center">
                <div className="col-sm-6 col-md-3">
                  <div className="skill">
                    <span>
                      <FontAwesomeIcon
                        icon={faCoffee}
                        class="card-img-top"
                        style={{ width: "9rem" }}
                      />
                    </span>
                    <br />
                    <br />
                    <h3>Review a Professor</h3>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faClinicMedical}
                      class="card-img-top"
                      style={{ width: "7rem" }}
                    />

                    <br />
                    <br />
                    <h3>Rate a University/College</h3>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faHeart}
                      class="card-img-top"
                      style={{ width: "7rem" }}
                    />

                    <br />
                    <br />
                    <h3>Insurance</h3>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faIdCardAlt}
                      class="card-img-top"
                      style={{ width: "7rem" }}
                    />

                    <br />
                    <br />
                    <h3>Risk Management Program Ranking</h3>
                  </div>
                </div>
              </Row>
            </Container>
          </Container>
        </div>

        <Jumbotron
          className="home"
          style={{ height: "26rem", marginTop: "20px" }}
        >
          <Container className="main-header-img intro-header">
            <h2 className="header-img-title" style={{ color: "white" }}>
              Get all the Insurance knowledge here
            </h2>
          </Container>
        </Jumbotron>

        <div id="event" style={{ marginTop: "20px" }}>
          <Container className="text-center">
            <h2 className="main-page-titles">
              This is an exciting time as you start embracing your independence.
              Before you venture into the wild – let's look at options to help
              make sure you're prepared!
            </h2>
          </Container>
        </div>

        <div id="event" style={{ marginTop: "-60px" }}>
          <Container className="text-center">
            <h3
              className="main-page-subtitle text-center"
              style={{ fontWeight: "bold" }}
            >
              LEARN ABOUT DIFFERENT TYPES OF INSURANCE
            </h3>
            <Container>
              <Row className="text-center" style={{ marginTop: "20px" }}>
                <Col>
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faCoffee}
                      class="card-img-top"
                      style={{ width: "11rem" }}
                    />

                    <h3>
                      <br />
                      <p>Auto Insurance</p>
                    </h3>
                  </div>
                </Col>

                <Col>
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faClinicMedical}
                      class="card-img-top"
                      style={{ width: "9rem" }}
                    />

                    <h3>
                      <br />
                      <p>Commercial Insurance</p>
                    </h3>
                  </div>
                </Col>

                <Col>
                  <div className="skill">
                    <FontAwesomeIcon
                      icon={faIdCardAlt}
                      class="card-img-top"
                      style={{ width: "9rem" }}
                    />

                    <h3>
                      <br />
                      <p>Life/Health Insurance</p>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}
