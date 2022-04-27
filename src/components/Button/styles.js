import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.grayButton ? "#868E96" : "#FF577F")};
  color: var(--white);
  height: 45px;
  border: solid 1px ${(props) => (props.grayButton ? "#868E96" : "#FF577F")};
  border-radius: 4px;
  margin-top: 16px;
  width: 100%;
  :hover {
    background-color: ${(props) => (props.grayButton ? "#343B41" : "#59323F")};
  }
`;
