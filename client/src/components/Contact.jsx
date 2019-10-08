import React, { Component } from "react";
import { ContactListContainer } from "./styled-components/ContactListStyles";

export default class Home extends Component {
  render() {
    return (
      <ContactListContainer>
        <section style={{ marginTop: "130px" }}>
          <div className="container text-center">
            <h1 className="main-page-title">
              Contact Insurance Backdoor®. We're here to help.
            </h1>
            <h4>Call to request any information. Help is standing by.</h4>
            <p>
              Our Location
              <br />
              422 9th St Atlanta, GA 30309
              <br />
              <br />
              Contact Info
              <br />
              insurancebackdoor@hotmail.com
            </p>
          </div>
        </section>
        <section>
          <div className="container text-center">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col green">
                  <div
                    className="skill card"
                    style={{ border: ".5px black solid" }}
                  >
                    <h2>Call Us</h2>

                    <p>
                      Auto/Home/Property claims — 800-SF-CLAIM (800-732-5246)
                    </p>
                    <p>Health claims — 866-855-1212</p>
                    <p>Life claims — 877-292-0398</p>
                  </div>
                </div>
                <div className="col green">
                  <div
                    className="skill card"
                    style={{ border: "1px black solid" }}
                  >
                    <h2>Location</h2>

                    <p>
                      Insurance Backdoor
                      <br />
                      Insurance Support Center — East
                      <br />
                      P.O. Box 588002
                      <br />
                      North Metro, GA 30029
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContactListContainer>
    );
  }
}
