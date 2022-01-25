import "../styles/Filters.scss";

const Filters = (props) => {
  const handleChangeFilterName = (event) => {
    props.handleChangeFilterName(event.currentTarget.value);
  };
  const handleChangeFilterHouse = (event) => {
    props.handleChangeFilterHouse(event.currentTarget.value);
  };
  return (
    <section>
      <form className="" action="" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="">Busca por personaje</label>
        <input
          type="text"
          placeholder="Ej. Sirius  Black"
          onChange={handleChangeFilterName}
          value={props.filterName}
        />
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
