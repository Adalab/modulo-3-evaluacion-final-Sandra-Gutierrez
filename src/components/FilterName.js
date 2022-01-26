import "../styles/FilterName.scss";

const FilterName = (props) => {

  const handleChangeFilterName = (event) => {
    props.handleChangeFilterName(event.currentTarget.value);
  };

  return (
    <>
      <label className="sectionForm__labelName" htmlFor="">Busca por personaje</label>
      <input
        className="sectionForm__inputName"
        type="text"
        placeholder="Ej. Sirius  Black"
        onChange={handleChangeFilterName}
        value={props.filterName}
      />
    </>
  );
};
export default FilterName;
