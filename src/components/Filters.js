import "../styles/Filters.scss";
import FilterName from "./FilterName";

const Filters = (props) => {

  const handleChangeFilterHouse = (event) => {
    props.handleChangeFilterHouse(event.currentTarget.value);
  };
  const handleChangeFilterGender = (event) => {
    props.handleChangeFilterGender(event.currentTarget.value);
  };
  
  return (
    <section>
      <form className="sectionForm" action="" onSubmit={(ev) => ev.preventDefault()}>
        <FilterName handleChangeFilterName={props.handleChangeFilterName} filterName={props.filterName}/>
        <label className="sectionForm__labelGender" htmlFor="gender">¿Bruja o Mago?</label>
        <select
          className="sectionForm__selectGender"
          name="gender"
          id=""
          onChange={handleChangeFilterGender}
          value={props.filterGender}
        >
          <option value="">Todos</option>
          <option value="female">Bruja</option>
          <option value="male">Mago</option>
        </select>
        <label className="sectionForm__labelHouse" htmlFor="house">Selecciona la casa</label>
        <select
          className="sectionForm__selectHouse"
          name="house"
          id=""
          onChange={handleChangeFilterHouse}
          value={props.filterHouse}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </form>
    </section>
  );
};
export default Filters;
