import { HeaderContent } from "./styles";
import KenzieHub from "../../assets/img/kenzie-hub-logo.svg";
import { useHistory } from "react-router-dom";

function Header({ title, path, setAuthenticated }) {
  const history = useHistory();

  const handleClick = (path) => {
    if (!setAuthenticated) {
      history.push(path);
    }

    setAuthenticated(false);
    localStorage.clear();
    history.push(path);
  };

  return (
    <HeaderContent>
      <img src={KenzieHub} alt="kenzie-hub-logo" />
      <button onClick={() => handleClick(path)}>{title}</button>
    </HeaderContent>
  );
}

export default Header;
