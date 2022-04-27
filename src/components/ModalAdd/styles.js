import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40%;
  height: 40%;
  background-color: var(--darkgray);
  border-radius: 4px;

  form {
    padding: 2rem;
  }

  @media (max-width: 678px) {
    width: 50%;
    height: 50%;
  }

  @media (min-width: 992px) {
    width: 369px;
    height: 369px;
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
    font-size: 0.8rem;
  }
`;
