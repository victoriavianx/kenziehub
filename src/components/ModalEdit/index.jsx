import Select from "../Select";
import { useForm } from "react-hook-form";
import "./styles.css";
import api from "../../services/api";
import { toast } from "react-toastify";

function ModalEdit({ onClose = () => {}, tech, showTechs }) {
  const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api
      .put(`/users/techs/${tech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia alterada com sucesso");
        return showTechs();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="modalContainer">
      <div className="Container">
        <div className="topContainer">
          <h4>Tecnologia detalhes</h4>
          <button id="buttonClose" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            name="status"
            label="Selecionar status"
            register={register}
            options={["Iniciante", "Intermediário", "Avançado"]}
          />
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </section>
  );
}

export default ModalEdit;
