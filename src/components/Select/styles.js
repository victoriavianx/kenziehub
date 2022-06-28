import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: auto;
  text-align: left;
  max-width: 300px;
  div {
    font-size: 12px;
    margin-bottom: 0.5rem;
  }
`;

export const SelectContainer = styled.select`
  background: var(--gray);
  border-radius: 4px;
  border: 2px solid var(--gray);
  color: var(--lightgray);
  font-size: 12px;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  width: 100%;
  height: 45px;
  display: flex;
  transition: 0.4s;

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
`;
