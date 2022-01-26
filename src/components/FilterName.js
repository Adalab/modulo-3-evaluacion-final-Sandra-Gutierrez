const FilterName = (props) => {

  const handleChangeFilterName = (event) => {
    props.handleChangeFilterName(event.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="">Busca por personaje</label>
      <input
        type="text"
        placeholder="Ej. Sirius  Black"
        onChange={handleChangeFilterName}
        value={props.filterName}
      />
    </>
  );
};
export default FilterName;
