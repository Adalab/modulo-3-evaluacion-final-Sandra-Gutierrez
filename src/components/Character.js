import { Link } from "react-router-dom";
import "../styles/Character.scss";

const Character = (props) => {
    const translateSpecie = () => {
        return props.character.species === 'human'? 'Humano': props.character.species === 'half-giant'? 'Semi-Gigante': props.character.species === 'werewolf'? 'Hombre lobo': props.character.species === 'ghost'? 'Fantasma': 'Genero desconocido';
    }
  return (
    <Link to={`/character/${props.character.id}`}>
      <div className="sectionList__liDiv">
      <img
        src={props.character.image}
        alt={`Retrato de ${props.character.name}`}
      />
      <div>
        <p className="sectionList__li--title">{props.character.name}</p>
        <p className="sectionList__li--specie">{translateSpecie()}</p>
      </div>
      </div>
    </Link>
  );
};
export default Character;
