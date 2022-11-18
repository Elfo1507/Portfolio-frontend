import styled from "styled-components";

export const SobreStyle = styled.section`
  background-color: var(--grey4);
  font-size: 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px;

  div {
    background-color: var(--grey2);
    width: 80%;
    height: 2px;
  }

  p {
    width: 200px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 15px;
    div {
      height: 350px;
      width: 2px;
    }
  }
`;
