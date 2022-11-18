import styled from "styled-components";
import BlackHole from "../assets/blackhole.jpg";

export const PProjetosStyle = styled.section`
  background-image: url(${BlackHole});
  background-size: 100%;
  height: 500px;
  display: flex;
  padding: 70px 50px;
  justify-content: space-between;

  img {
    height: 200px;
    width: 400px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  p {
    margin-top: -5px;
    width: 400px;
    background-color: var(--dark-color);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px;
  }
`;
