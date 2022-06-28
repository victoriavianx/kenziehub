import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 118px;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--lightgray);
  }
`;

export const TechTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;

  h3 {
    font-size: 16px;
    font-weight: 400;
  }

  button {
    width: 32px;
    height: 32px;
    font-size: 18px;
    font-weight: 700;
    background-color: var(--darkgray);
    color: var(--white);
    border: 1px solid var(--darkgray);
    border-radius: 4px;
  }
`;

export const Content = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  background-color: var(--darkgray);
  justify-content: center;
  border-radius: 4px;
  padding-top: 22px;
  max-width: 768px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    max-width: 738px;
  }
`;
