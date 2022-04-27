import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 70px;
    height: 32px;
    font-size: 12px;
    font-weight: 700;
    background-color: var(--darkgray);
    color: var(--white);
    border: 1px solid var(--darkgray);
    border-radius: 4px;
  }
`;
