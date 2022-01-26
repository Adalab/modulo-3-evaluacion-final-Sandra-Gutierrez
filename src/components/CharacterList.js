import "../styles/CharacterList.scss";
import Character from "./Character";


const CharacterList = (props) => {
  const characterElements = props.data.map((character) => {
    return <li className='sectionList__li' key={character.id}>
      <Character character={character}/>
    </li>
  })
  const errorCharacter = () => {
    return <p>No se encuentran resultados para {props.filterName}.</p>
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
