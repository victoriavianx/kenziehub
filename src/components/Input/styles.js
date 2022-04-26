import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    font-size: 12px;
    margin-bottom: 1rem;
  }
`;

export const InputContainer = styled.input`
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

  ::placeholder {
    color: var(--lightgray);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
`;
