import "../styles/Filters.scss";
import FilterName from "./FilterName";

const Filters = (props) => {

  const handleChangeFilterHouse = (event) => {
    props.handleChangeFilterHouse(event.currentTarget.value);
  };
  return (
    <section>
      <form className="" action="" onSubmit={(ev) => ev.preventDefault()}>
        <FilterName handleChangeFilterName={props.handleChangeFilterName}/>
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
