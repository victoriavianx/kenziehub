import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.grayButton ? "#868E96" : "#FF577F")};
  color: var(--white);
  height: 45px;
  border: solid 1px ${(props) => (props.grayButton ? "#868E96" : "#FF577F")};
  border-radius: 4px;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;

  :hover {
    background-color: ${(props) => (props.grayButton ? "#343B41" : "#59323F")};
  }

  @media (min-width: 768px) {
    margin-top: 1.45rem;
  }
`;
