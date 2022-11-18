import styled from "styled-components";
import pilares from "../assets/pilarescreation.jpg";

export const HomeStyle = styled.section`
  background-image: url(${pilares});
  background-size: 100%;
  width: 100%;
  height: 400px;
  padding: 10px;
`;

export const HomeTitle = styled.h2`
  margin-top: 20px;
  transform: translateX(50px) translateY(50px);
  width: fit-content;
`;

export const HomeText = styled.p`
  transform: translateX(100px) translateY(100px);
  width: 240px;
`;

export const HomeImg = styled.img`
  width: 150px;
  border-radius: 5px;
  transform: translateX(830px) translateY(20px);
`;
