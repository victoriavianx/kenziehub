import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ModalContainer, TopContainer } from "./styles";
import "./button.css";
import api from "../../services/api";
import { toast } from "react-toastify";

function Modal({ onClose = () => {}, showTechs }) {
  const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia cadastrada com sucesso");
        return showTechs();
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalContainer>
      <Container>
        <TopContainer>
          <h4>Cadastrar Tecnologia</h4>
          <button id="buttonClose" onClick={onClose}>
            X
          </button>
        </TopContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="title"
            label="Nome"
            placeholder="Digite aqui a tecnologia"
            register={register}
            error={errors.title?.message}
          />
          <Select
            name="status"
            label="Selecionar status"
            register={register}
            options={["Iniciante", "Intermediário", "Avançado"]}
            error={errors.status?.message}
          />
          <button id="buttonSignup" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </Container>
    </ModalContainer>
  );
}

export default Modal;
