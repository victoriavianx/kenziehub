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

export const InputContainer = styled.input`
  background: var(--gray);
  border-radius: 4px;
  border: 2px solid var(--gray);
  color: var(--white);
  font-size: 14px;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  width: 100%;
  height: 45px;
  display: flex;
  transition: 0.4s;

  ::placeholder {
    color: var(--lightgray);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
`;
