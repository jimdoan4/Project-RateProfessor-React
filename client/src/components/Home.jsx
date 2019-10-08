import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="header">
          <div
            class="container-fluid text-center animated fadeInDowns"
            id="header-container"
          >
            <div class="text-container"></div>
          </div>
        </section>

        <section id="event">
          <div class="container text-center">
            <h3
              class="main-page-subtitle text-center"
              style={{ fontWeight: "bold" }}
            >
              LEARN ABOUT OUR PRODUCTS
            </h3>
            <div class="container-fluid">
              <div class="os-animation" data-animation="fadeInUp">
                <div class="row text-center">
                  <div class="col-sm-6 col-md-3 green">
                    <div class="skill">
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

                  <div class="col-sm-6 col-md-3 green">
                    <div class="skill">
                      <span>
                        <FontAwesomeIcon
                          icon={faClinicMedical}
                          class="card-img-top"
                          style={{ width: "7rem" }}
                        />
                      </span>
                      <br />
                      <br />
                      <h3>Rate a University/College</h3>
                    </div>
                  </div>

                  <div class="col-sm-6 col-md-3 green">
                    <div class="skill">
                      <span>
                        <FontAwesomeIcon
                          icon={faHeart}
                          class="card-img-top"
                          style={{ width: "7rem" }}
                        />
                      </span>
                      <br />
                      <br />
                      <h3>Insurance</h3>
                    </div>
                  </div>

                  <div class="col-sm-6 col-md-3 green">
                    <div class="skill">
                      <span>
                        <FontAwesomeIcon
                          icon={faIdCardAlt}
                          class="card-img-top"
                          style={{ width: "7rem" }}
                        />
                      </span>
                      <br />
                      <br />
                      <h3>Risk Management Program Ranking</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Jumbotron
          className="home"
          style={{ height: "26rem", marginTop: "20px" }}
        >
          <Container className="main-header-img intro-header">
            <h2 class="header-img-title" style={{ color: "white" }}>
              Get all the Insurance knowledge here
            </h2>
          </Container>
        </Jumbotron>

        <section id="event" style={{ marginTop: "20px" }}>
          <div class="container text-center">
            <h2 class="main-page-titles">
              This is an exciting time as you start embracing your independence.
              Before you venture into the wild – let's look at options to help
              make sure you're prepared!
            </h2>
          </div>
        </section>

        <section id="event" style={{ marginTop: "-60px" }}>
          <div class="container text-center">
            <h3
              class="main-page-subtitle text-center"
              style={{ fontWeight: "bold" }}
            >
              LEARN ABOUT OUR PRODUCTS
            </h3>
            <div class="container-fluid">
              <div class="row text-center" style={{ marginTop: "20px" }}>
                <div class="col green">
                  <div class="skill">
                    <span>
                      <FontAwesomeIcon
                        icon={faCoffee}
                        class="card-img-top"
                        style={{ width: "11rem" }}
                      />
                    </span>
                    <h3>
                      <br />
                      <p>Auto Insurance</p>
                    </h3>
                  </div>
                </div>

                <div class="col green">
                  <div class="skill">
                    <span>
                      <FontAwesomeIcon
                        icon={faClinicMedical}
                        class="card-img-top"
                        style={{ width: "9rem" }}
                      />
                    </span>
                    <h3>
                      <br />
                      <p>Commercial Insurance</p>
                    </h3>
                  </div>
                </div>

                <div class="col green">
                  <div class="skill">
                    <span>
                      <FontAwesomeIcon
                        icon={faIdCardAlt}
                        class="card-img-top"
                        style={{ width: "9rem" }}
                      />
                    </span>
                    <h3>
                      <br />
                      <p>Life/Health Insurance</p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
