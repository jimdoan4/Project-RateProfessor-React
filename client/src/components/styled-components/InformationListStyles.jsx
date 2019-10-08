import styled, { keyframes, css } from 'styled-components'
import { fadeInDown } from 'react-animations'

export const fadeIn = keyframes`${fadeInDown}`

export const InformationListContainer = styled.div`
  padding: 50px 0;
  font-family: 'Manjari', sans-serif;
}

#event .container .row .col-md-4 .card a img {
  opacity: 0.7;
  height: 200px;
}

#event .container .row .col-md-4 .card a img:hover {
  opacity: 1;
  transition: all 0.7s ease-out;
}

#event .container .row .col-md-4 .card .card-text {
  line-height: 1.3;
}

.main-page-title {
  font-weight: bold;
  text-decoration: underline;
  font-size: 32px;
}

#event .main-page-subtitle {
  font-size: 24px;
  letter-spacing: 1px;
  text-align: left;
}

#event h4 {
  font-size: 18px;
  margin: 30px;
}

#event .subtitle {
  font-weight: bold;
  text-decoration: underline;
}

.card-body h3 {
  font-weight: bold;
  font-size: 18px;
  text-align: left;
}

.card-body p {
  margin-bottom: 20px;
}



`
