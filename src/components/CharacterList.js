import "../styles/CharacterList.scss";
import Character from "./Character";


const CharacterList = (props) => {
  const characterElements = props.data.map((character) => {
    return <li key={character.id}>
      <Character character={character}/>
    </li>
  })
  const errorCharacter = () => {
    return <p>No se encuentran resultados para {props.filterName}.</p>
  }
  return (
    <section>
      <ul>
        {characterElements.length !== 0 ? characterElements : errorCharacter() }
      </ul>
    </section>
  );
};
export default CharacterList;
