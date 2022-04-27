import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  background-color: var(--darkgray);
  border-radius: 4px;

  h4 {
    margin-top: 1rem;
  }

  span {
    margin-top: 1rem;
    font-size: 10px;
    color: var(--lightgray);
  }

  form {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 767px) {
    width: 60vw;
  }

  @media (min-width: 1025px) {
    width: 400px;
  }
`;
