import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  background-color: var(--darkgray);
  border-radius: 4px;
  padding-bottom: 2rem;

  h4 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  form {
    margin: 1rem 0 2rem 0;
  }

  div {
    span {
      margin-top: 0.3rem;
      margin-bottom: 1rem;
      font-size: 12px;
      color: var(--lightgray);
    }
  }

  @media (max-width: 767px) {
    width: 60vw;
  }

  @media (min-width: 1025px) {
    width: 400px;
  }
`;
