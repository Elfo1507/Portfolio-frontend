import styled from "styled-components";

export const ProjetosContainer = styled.section`
  background-color: var(--main-color);
  padding: 50px;

  & > h3 {
    font-size: 30px;
    margin-bottom: 5px;
  }

  & > p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
