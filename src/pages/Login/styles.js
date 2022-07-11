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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  img {
    margin-bottom: 3rem;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  background-color: var(--darkgray);
  border-radius: 4px;
  padding-bottom: 2rem;
  max-width: 350px;

  h4 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  form {
    max-width: 300px;
    margin: 1rem 0 2rem 0;

    span {
      margin-left: 1rem;
    }

    button {
      max-width: 260px;
    }
  }

  @media (min-width: 1025px) {
    width: 400px;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  max-width: 240px;

  span {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    font-size: 12px;
    color: var(--white);
  }
`;

export const Box = styled.div`
  display: none;

  @media (min-width: 768px) {
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
    margin-left: 3rem;

    img {
      width: 40vw;
      max-width: 500px;
    }
  }

  @media (min-width: 1024px) {
    display: unset;
    margin-top: 5rem;
    margin-left: 3rem;
  }
`;
