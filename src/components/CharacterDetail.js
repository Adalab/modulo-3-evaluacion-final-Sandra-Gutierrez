import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const translateSpecie = () => {
    return props.data.species === 'human'? 'Humano': props.data.species === 'half-giant'? 'Semi-Gigante': props.data.species === 'werewolf'? 'Hombre lobo': props.data.species === 'ghost'? 'Fantasma': 'Genero desconocido';
  }
  const translateGender = () => {
    return props.data.gender === 'male'? 'Hombre':'Mujer';
  }
  const translateStatus = () => {
    return props.data.alive === true ? 'Vivo':'Muerto';
  }
  return (
    <div>
      <Link to='/'>Volver al inicio</Link>
      <h3>Detalle del personaje</h3>
      <img src={props.data.image} alt={`Retrato de ${props.data.name}`} />
      <p>{props.data.name}</p>
      <p>Casa: {props.data.house}</p>
      <p>Género: {translateGender()}</p>
      <p>Estatus: {translateStatus()}</p>
      <p>Especie: {translateSpecie()}</p>
    </div>
  );
};
export default CharacterDetail;
