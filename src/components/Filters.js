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
      <form className="" action="" onSubmit={(ev) => ev.preventDefault()}>
        <FilterName handleChangeFilterName={props.handleChangeFilterName} filterName={props.filterName}/>
        <label htmlFor="gender">¿Bruja o Mago?</label>
        <select
          name="gender"
          id=""
          onChange={handleChangeFilterGender}
          value={props.filterGender}
        >
          <option value="">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
        <label htmlFor="house">Selecciona la casa</label>
        <select
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
