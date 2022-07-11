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
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  animation: ${appearFromLeft} 1s;

  @media (min-width: 540px) {
    flex-direction: column;
  }

  @media (min-width: 968px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 60%;
  max-width: 400px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  @media (min-width: 540px) {
    width: 90%;

    div {
      flex-direction: row;
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;

export const Box = styled.div`
  display: none;

  @media (min-width: 540px) {
    display: unset;

    transform: translateY(0);
    animation: float 4s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    margin-top: 5rem;

    img {
      width: 50vw;
      max-width: 500px;
    }
  }

  @media (min-width: 1024px) {
    display: unset;
    margin-top: 1rem;
    margin-left: 3rem;
  }
`;
