import "../styles/CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
 
  const renderCharacters = () => {
    return props.data
      .filter((character) =>
        character.name
          .toLocaleLowerCase()
          .includes(props.filterName.toLocaleLowerCase())
      )
      .map((character, index) => {
        return (
          <Link to={`/user/${props.id}`}>
            <li key={index} id={index}>
              <img src={character.image} alt={`Retrato de ${character.name}`} />
              <p>{character.name}</p>
              <p>{character.species}</p>
            </li>
          </Link>
        );
      });
  };
  return <>{renderCharacters()}</>;
};
export default CharacterCard;
