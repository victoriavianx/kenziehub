import { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Modal from "../../components/ModalAdd";
import ModalEdit from "../../components/ModalEdit";
import Card from "../../components/Card";
import { Container, Content, Info, TechTitle } from "./styles";
import api from "../../services/api";

function Dashboard({ authenticated, setAuthenticated }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [techsList, setTechsList] = useState([]);
  const [selectedTech, setSelectedTech] = useState("teste");
  const user = JSON.parse(localStorage.getItem("@Kenziehub:user"));

  const { id, name, course_module } = user;

  const showTechs = useCallback(() => {
    api.get(`/users/${id}`).then((response) => {
      const { data } = response;
      const { techs } = data;

      setTechsList(techs);
    });
  }, [id]);

  useEffect(() => {
    showTechs();
  }, [showTechs]);

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleEditTech = (tech) => {
    setIsModalEditVisible(true);
    setSelectedTech(tech);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {isModalEditVisible && (
        <ModalEdit
          onClose={() => setIsModalEditVisible(false)}
          tech={selectedTech}
          showTechs={showTechs}
        />
      )}
      <Container>
        <Header
          title={"Sair"}
          path={"/login"}
          setAuthenticated={setAuthenticated}
        />
        <Info>
          <h2>Olá, {name}</h2>
          <span>{course_module}</span>
        </Info>
        <TechTitle>
          <h3>Tecnologias</h3>
          <button onClick={handleClick}>+</button>
          {isModalVisible ? (
            <Modal
              onClose={() => setIsModalVisible(false)}
              showTechs={showTechs}
            />
          ) : null}
        </TechTitle>
        <Content>
          <ul>
            {techsList.map((tech) => (
              <Card
                key={tech.id}
                tech={tech}
                showTechs={showTechs}
                handleEditTech={handleEditTech}
              />
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
