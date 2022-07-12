import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Info = styled.div`
  animation: ${appearFromLeft} 1s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 80px;
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

  @media (min-width: 768px) {
    height: 118px;
  }
`;

export const TechTitle = styled.div`
  animation: ${appearFromLeft} 1s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 70px;

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
  animation: ${appearFromLeft} 1s;
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
