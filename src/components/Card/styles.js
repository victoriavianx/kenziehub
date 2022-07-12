import styled from "styled-components";

export const CardLi = styled.li`
  background-color: var(--black);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-radius: 4px;
  width: 70vw;
  margin: 1rem 0 1rem 0;
  max-width: 708px;
  transition: 0.5s;

  h3 {
    font-size: 0.7rem;
    text-align: center;
    margin-left: 1rem;
  }

  p {
    font-size: 0.5rem;
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

  @media (min-width: 425px) {
    h3 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;
