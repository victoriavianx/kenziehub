import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  margin: auto;
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
    color: var(--red);
  }

  form {
    max-width: 300px;
    margin: 1rem 0 2rem 0;
  }

  @media (min-width: 1025px) {
    width: 400px;
  }
`;
