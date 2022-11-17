import styled from "styled-components";

export const HeaderMenu = styled.header`
  background-color: var(--greyT);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  position: fixed;
  top: 0;
  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: var(--grey0);
  }
`;
