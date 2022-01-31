import "../styles/Filters.scss";
import FilterName from "./FilterName";

const Filters = (props) => {
  const handleChangeFilterHouse = (event) => {
    props.handleChangeFilterHouse(event.currentTarget.value);
  };
  const handleChangeFilterGender = (event) => {
    props.handleChangeFilterGender(event.currentTarget.value);
  };
  const handleChangeFilterStudent = (event) => {
    props.handleChangeFilterStudent(event.currentTarget.checked);
  };

  const handleChangeAlive = (ev) => {
    props.handleChangeAlive(ev.currentTarget.value);
  };

  return (
    <section>
      <form
        className="sectionForm"
        action=""
        onSubmit={(ev) => ev.preventDefault()}
      >
        <div className="sectionForm__find">
          <FilterName
            handleChangeFilterName={props.handleChangeFilterName}
            filterName={props.filterName}
          />
        </div>

        <div className="sectionForm__select">
          <label className="sectionForm__labelGender" htmlFor="gender">
            ¿Bruja o Mago?
          </label>
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

          <label className="sectionForm__labelHouse" htmlFor="house">
            Selecciona la casa
          </label>
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
        </div>

        <div className="sectionForm__check">
          <label htmlFor="hogwartsStudent">Estudiantes de Hogwarts</label>
          <input
            type="checkbox"
            name="hogwartsStudent"
            id="hogwartsStudent"
            checked={props.filterStudent}
            onChange={handleChangeFilterStudent}
            value={props.filterStudent}
          />
        </div>
        <div className="sectionForm__radio">
          <label></label>
          <label htmlFor="alive">Vivo</label>
          <input
            type="radio"
            name="aliveCharacter"
            id="alive"
            value="alive"
            checked={props.filterAlive === "alive"}
            onChange={handleChangeAlive}
          />
          <label htmlFor="notAlive">Muerto</label>
          <input
            type="radio"
            name="aliveCharacter"
            id="notAlive"
            value="notAlive"
            checked={props.filterAlive === "notAlive"}
            onChange={handleChangeAlive}
          />
        </div>
      </form>
    </section>
  );
};
export default Filters;
