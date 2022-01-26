import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to='/'>Volver al inicio</Link>
      <h3>Detalle del personaje</h3>
      <img src={props.data.image} alt={`Retrato de ${props.data.name}`} />
      <p>{props.idCharacter}</p>
      <p>Estatus: {props.data.alive}</p>
      <p>Especie: {props.data.species}</p>
      <p>Género: {props.data.gender}</p>
      <p>Casa: {props.data.house}</p>
    </div>
  );
};
export default CharacterDetail;
