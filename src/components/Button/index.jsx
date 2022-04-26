import { Container } from "./styles";

function Button({ children, grayButton = false, ...rest }) {
  return (
    <Container grayButton={grayButton} type="button" {...rest}>
      {children}
    </Container>
  );
}

export default Button;
