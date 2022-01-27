import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";
import gryffIcon from "../images/gryffindor-icon-100x100.png"
import slyIcon from "../images/slythering-icon-100x100.png"
import ravIcon from "../images/ravenclaw-icon-100x100.png"
import huffIcon from "../images/hufflepuff-icon-100x100.png"

const CharacterDetail = (props) => {
  const translateSpecie = () => {
    return props.data.species === "human"
      ? "Humano"
      : props.data.species === "half-giant"
      ? "Semi-Gigante"
      : props.data.species === "werewolf"
      ? "Hombre lobo"
      : props.data.species === "ghost"
      ? "Fantasma"
      : "Genero desconocido";
  };
  const translateGender = () => {
    return props.data.gender === "male" ? "Hombre" : "Mujer";
  };
  const translateStatus = () => {
    return props.data.alive ? "Vivo" : "Muerto";
  };
  const addIconsHouse = () => {
    return props.data.house === "Gryffindor"
      ? gryffIcon
      : props.data.house === "Slytherin"
      ? slyIcon
      : props.data.house === "Ravenclaw"
      ? ravIcon
      : props.data.house === "Hufflepuff"
      ? huffIcon
      : "Casa desconocida";
  }
  return (
    <div>
      <Link className="btnReturn" to="/">
        Volver
      </Link>
      <div className="cardDetail">
        <img
          className="cardDetail--img"
          src={props.data.image}
          alt={`Retrato de ${props.data.name}`}
        />
        <div className="cardDetail__info">
          <h3 className="cardDetail__info--title">Detalle del personaje</h3>
          <p>Nombre: {props.data.name}</p>
          <p>Casa:<img className="cardDetail__info--iconHouse" src={addIconsHouse()} alt=''></img></p>
          <p>Género: {translateGender()}</p>
          <p>Estatus: {translateStatus()}</p>
          <p>Especie: {translateSpecie()}</p>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
