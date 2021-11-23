import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const breatheAnimation = keyframes`
 0% {  opacity: 1;}
 10% {opacity: 0}
 20% { opacity: .5}
 30% { opacity: 1 }
 40% {  opacity: 0; }
 50% {  opacity: 1; }
 60% {  opacity: 0; }
 70% {  opacity: 1; }
 80% {  opacity: 0; }
 90% {  opacity: 1; }
 100% { opacity: 0; }
`;
const H1 = styled.div`
  font-size: 50px;  
  opacity: 0;
  animation-name: ${breatheAnimation};
  animation-duration: 5s;
  animation-direction: forwards;
  animation-iteration-count: 1;
`;


const Loading = () => {
  return (
    <Container>
      <H1>Retrieving Location...</H1>
    </Container>
  );
};

export default Loading;
