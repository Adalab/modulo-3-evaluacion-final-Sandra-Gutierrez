import "../styles/CharacterCard.scss";

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
          <li key={index}>
            <img src={character.image} alt={`Retrato de ${character.name}`} />
            <p>{character.name}</p>
            <p>{character.species}</p>
          </li>
        );
      });
  };
  return <>{renderCharacters()}</>;
};
export default CharacterCard;
