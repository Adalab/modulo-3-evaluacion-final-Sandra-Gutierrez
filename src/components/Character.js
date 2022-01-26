import { Link } from "react-router-dom";

const Character = (props) => {
    const translateSpecie = () => {
        return props.character.species === 'human'? 'Humano': props.character.species === 'half-giant'? 'Semi-Gigante': props.character.species === 'werewolf'? 'Hombre lobo': props.character.species === 'ghost'? 'Fantasma': 'Genero desconocido';
    }
  return (
    <Link to={`/user/${props.character.id}`}>
        <img src={props.character.image} alt={`Retrato de ${props.character.name}`} />
        <p>{props.character.name}</p>
        <p>{translateSpecie()}</p>
    </Link>
  );
};
export default Character;
