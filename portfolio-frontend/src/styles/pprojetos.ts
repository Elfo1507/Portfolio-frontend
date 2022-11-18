import styled from "styled-components";
import BlackHole from "../assets/blackhole.jpg";

export const PProjetosStyle = styled.section`
  background-image: url(${BlackHole});
  background-size: cover;
  background-repeat: no-repeat;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 30px 10px;
  justify-content: space-between;
  font-size: 10px;

  img {
    height: 100px;
    width: 200px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  p {
    margin-top: -5px;
    width: 200px;
    background-color: var(--dark-color);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px;
  }
`;
