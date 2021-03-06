import styled, { keyframes, css } from "styled-components";



export const ProfessorListContainer = styled.div`
   display: flex;
  padding: 20px 0; 
  font-family: "muse-500", Arial, sans-serif;
   width: 100%;
  margin: auto 0; 
  justify-content: center;
  align-items: center!important;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  font-family: "muse-500", Arial, sans-serif!important;
}

.card a img {
  opacity: 0.7;
  height: 200px;
}

.card a img:hover {
  opacity: 1;
  transition: all 0.7s ease-out;
}

.card .card-text {
  line-height: 1.3;
}

.plans-section .main-page-title {
  font-weight: bold;
  text-decoration: underline;
  font-size: 22px;
  font-family: "muse-500", Arial, sans-serif!important;
}


`;
