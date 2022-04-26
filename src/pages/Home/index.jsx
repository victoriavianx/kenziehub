import { useHistory } from "react-router-dom";
import { Container, Content } from "./styles";
import KenzieHub from "../../assets/kenzie-hub-logo.svg";
import Button from "../../components/Button";

function Home() {
  const history = useHistory();

  const handleNavigate = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <img src={KenzieHub} alt="kenzie-hub-logo" />
        <div>
          <Button onClick={() => handleNavigate("/signup")} grayButton>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigate("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;