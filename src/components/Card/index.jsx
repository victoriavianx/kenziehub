import { CardLi } from "./styles";
import { FiTrash, FiEdit } from "react-icons/fi";
import api from "../../services/api";
import { toast } from "react-toastify";

function Card({ tech, handleEditTech, showTechs }) {
  const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

  const handleModal = () => {
    handleEditTech(tech);
  };

  const handleClick = () => {
    api
      .delete(`/users/techs/${tech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia deletada com sucesso");
        return showTechs();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardLi>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
      <div>
        <button onClick={handleModal}>
          <FiEdit className="icon" />
        </button>
        <button onClick={handleClick}>
          <FiTrash className="icon" />
        </button>
      </div>
    </CardLi>
  );
}

export default Card;
