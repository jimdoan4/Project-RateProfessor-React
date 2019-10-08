import React, { Component } from "react";
import { FooterContainer } from "./styled-components/FooterStyles";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div class="container-fluid text-center">
          <div class="copyright-area">
            <p>
              Copyright © 2019 Insurance Backdoor - All Rights Reserved. Site
              Credits from Jim Doan
            </p>
          </div>
        </div>
      </FooterContainer>
    );
  }
}
