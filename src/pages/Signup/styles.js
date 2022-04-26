import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;

  background-color: var(--darkgray);

  form {
    margin: 2rem 0;
  }
`;

export const Select = styled.select`
  background: var(--gray);
  border-radius: 4px;
  border: 2px solid var(--gray);
  color: var(--lightgray);
  font-size: 16px;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  height: 45px;
  display: flex;
  transition: 0.4s;
`;
