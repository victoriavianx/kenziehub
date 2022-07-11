import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, BoxImage, ButtonDiv, Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import KenzieHub from "../../assets/img/kenzie-hub-logo.svg";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import Figure from "../../assets/img/undraw_learning_re_32qv.svg";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));

        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push(`/dashboard/${user.id}`);
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
      });
  };

  const handleNavigate = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div>
        <BoxImage>
          <img src={KenzieHub} alt="kenzie-hub-logo" />
        </BoxImage>
        <Content>
          <h4>Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
              register={register}
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
          </form>

          <ButtonDiv>
            <span>Ainda não possui uma conta?</span>
            <Button grayButton onClick={() => handleNavigate("/signup")}>
              Cadastre-se
            </Button>
          </ButtonDiv>
        </Content>
      </div>
      <Box>
        <img src={Figure} alt="" />
      </Box>
    </Container>
  );
}

export default Login;
