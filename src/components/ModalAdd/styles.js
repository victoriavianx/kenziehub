import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  height: 50%;
  background-color: var(--darkgray);
  border-radius: 4px;
  max-width: 330px;

  form {
    padding: 2rem;
    max-width: 330px;
  }

  @media (min-width: 390px) {
    height: 45%;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--gray);
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  h4 {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
`;
