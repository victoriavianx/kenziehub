import { useHistory } from "react-router-dom";
import { Box, Container, Content } from "./styles";
import KenzieHub from "../../assets/img/kenzie-hub-logo.svg";
import Figure from "../../assets/img/undraw_developer_activity_re_39tg.svg";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigate = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

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
      <Box>
        <img src={Figure} alt="" />
      </Box>
    </Container>
  );
}

export default Home;
