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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  animation: ${appearFromLeft} 1s;
  margin: 0 auto 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  background-color: var(--darkgray);
  border-radius: 4px;
  max-width: 350px;

  h4 {
    margin-top: 1rem;
  }

  span {
    margin-top: 1rem;
    font-size: 10px;
    color: var(--white);
  }

  form {
    max-width: 300px;
    margin: 1rem 0 2rem 0;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    max-width: 625px;

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      max-width: 540px;
    }
  }
`;

export const Divisor = styled.div`
  @media (min-width: 768px) {
    margin: 0.5rem;
  }

  @media (min-width: 820px) {
    margin: 1rem;
  }
`;

export const ButtonDiv = styled.div`
  margin: auto;
  width: 100%;
  max-width: 260px;

  @media (min-width: 768px) {
    max-width: 240px;
  }
`;
