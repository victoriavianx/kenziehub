import { useForm } from "react-hook-form";
import { Container, Content, Header, Select } from "./styles";
import KenzieHub from "../../assets/kenzie-hub-logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import api from "../../services/api";

function Signup() {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ name, email, password, course_module }) => {
    const user = { name, email, password, course_module };
    api.post("/users", user);
  };

  return (
    <Container>
      <Header>
        <img src={KenzieHub} alt="kenzie-hub-logo" />
        <button>Voltar</button>
      </Header>
      <Content>
        <h4>Crie sua conta</h4>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div>
            <label>Selecionar Módulo {errors.course_module?.message}</label>
            <Select {...register("course_module")}>
              <option value="Primeiro módulo">Primeiro módulo</option>
              <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
              <option value="Quarto módulo">Quarto módulo</option>
            </Select>
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
