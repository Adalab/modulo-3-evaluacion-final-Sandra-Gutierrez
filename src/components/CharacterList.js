import "../styles/CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    <section>
      <ul>
        <CharacterCard data={props.data} filterName={props.filterName} />
      </ul>
    </section>
  );
};
export default CharacterList;
