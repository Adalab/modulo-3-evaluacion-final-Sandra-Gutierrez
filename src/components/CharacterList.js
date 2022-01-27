import "../styles/CharacterList.scss";
import Character from "./Character";


const CharacterList = (props) => {
  const colorHouse = () => {
    return props.filterHouse === "Gryffindor"
      ? "gryff"
      : props.filterHouse === "Slytherin"
      ? "sly"
      : props.filterHouse === "Ravenclaw"
      ? "rav"
      : props.filterHouse === "Hufflepuff"
      ? "huff"
      : "";
  }
  const characterElements = props.data.map((character) => {
    return <li className={`sectionList__li ${colorHouse()}`} key={character.id}>
      <Character character={character}/>
    </li>
  })
  const errorCharacter = () => {
    return <p className="sectionList__error">No se encuentran resultados para <strong>{props.filterName}</strong>.</p>
  }
  return (
    <section className=''>
      <ul className='sectionList'>
        {characterElements.length !== 0 ? characterElements : errorCharacter() }
      </ul>
    </section>
  );
};
export default CharacterList;
