import { useForm } from "react-hook-form";
import { ButtonDiv, Container, Content, Divisor, NewInput } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Este email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não combinam")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ name, email, password, course_module, bio, contact }) => {
    const user = { name, email, password, course_module, bio, contact };
    console.log(user);
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Header title={"Voltar"} path={"/"} />
      <Content>
        <h4>Crie sua conta</h4>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Divisor>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              error={errors.name?.message}
            />
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
            <Input
              name="confirmPassword"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              register={register}
              type="password"
              error={errors.confirmPassword?.message}
            />
          </Divisor>
          <Divisor>
            <Select
              name="course_module"
              label="Selecionar Módulo"
              register={register}
              options={[
                "Primeiro módulo (Introdução ao Frontend)",
                "Segundo módulo (Frontend Avançado)",
                "Terceiro módulo (Introdução ao Backend)",
                "Quarto módulo (Backend Avançado)",
              ]}
              error={errors.course_module?.message}
            />
            <Input
              name="bio"
              label="Bio"
              placeholder="Um pouco sobre você"
              register={register}
              error={errors.bio?.message}
            />
            <Input
              name="contact"
              label="Contato"
              placeholder="Digite aqui seu contato"
              register={register}
              error={errors.contact?.message}
            />
            <ButtonDiv>
              <Button type="submit">Cadastrar</Button>
            </ButtonDiv>
          </Divisor>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
