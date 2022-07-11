import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: auto;
  text-align: left;
  max-width: 300px;
  div {
    font-size: 12px;
    margin-left: auto;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 540px) {
    div {
      margin-left: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    max-width: 240px;

    div {
      margin-left: 0;
    }
  }
`;

export const SelectContainer = styled.select`
  background: var(--gray);
  border-radius: 4px;
  border: 2px solid var(--gray);
  color: var(--lightgray);
  font-size: 12px;
  margin: 0 auto 1rem auto;
  padding-left: 0.5rem;
  width: 100%;
  height: 45px;
  display: flex;
  transition: 0.4s;
  max-width: 260px;

  option {
    font-size: 14px;
  }

  ::placeholder {
    color: var(--lightgray);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  @media (min-width: 768px) {
    max-width: 240px;
    margin: 0 0 1rem 0;
  }
`;
