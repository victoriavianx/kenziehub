import styled from "styled-components";

export const CardLi = styled.li`
  background-color: var(--black);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-radius: 4px;
  width: 50vw;
  margin: 1rem 0 1rem 0;

  h3 {
    font-size: 14px;
    text-align: center;
    margin-left: 1rem;
  }

  p {
    font-size: 12px;
    color: var(--lightgray);
    text-align: center;
    margin-left: 1rem;
  }

  :hover {
    background-color: var(--gray);
  }

  div {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 1rem;

    button {
      width: 25px;
      height: 25px;
      background-color: transparent;
      border: 0;
      margin-left: 1rem;

      .icon {
        color: #fff;
      }
    }
  }
`;
