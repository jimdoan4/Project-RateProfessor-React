import React, { Component } from "react";
import { FooterContainer } from "./styled-components/FooterStyles";
import { Container } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Container className="container-fluid text-center">
          <div className="copyright-area">
            <p>
              Copyright © 2019 Insurance Backdoor - All Rights Reserved. Site
              Credits from Jim Doan
            </p>
          </div>
        </Container>
      </FooterContainer>
    );
  }
}
