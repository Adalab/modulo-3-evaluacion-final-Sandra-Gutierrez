import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";

console.log("( => Ready! )");

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  // Api
  useEffect(() => {
    callToApi(filterHouse).then((response) => {
      setData(response);
    });
  }, [filterHouse]);
  // Handle Functions
  const handleChangeFilterName = (ev) => {
    setFilterName(ev.currentTarget.value);
  };
  const handleChangeFilterHouse = (ev) => {
    setFilterHouse(ev.currentTarget.value);
    console.log(filterHouse);
  };
  // Render Functions
  const renderCharacters = () => {
    return data
      .filter((character) =>
        character.name
          .toLocaleLowerCase()
          .includes(filterName.toLocaleLowerCase())
      )
      .map((character, index) => {
        return (
          <li key={index}>
            <img src={character.image} alt={`Retrato de ${character.name}`} />
            <p>{character.name}</p>
            <p>{character.species}</p>
          </li>
        );
      });
  };
  // React Render HTML
  return (
    <>
      <header>
        <h1>Esto va de Harry Potter...</h1>
      </header>
      <main>
        <section>
          <form className="" action="" onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="">Busca por personaje</label>
            <input
              type="text"
              placeholder="Ej. Sirius  Black"
              onChange={handleChangeFilterName}
              value={filterName}
            />
            <label htmlFor="house">Selecciona la casa</label>
            <select
              name="house"
              id=""
              onChange={handleChangeFilterHouse}
              value={filterHouse}
            >
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </form>
        </section>
        <section>
          <ul>{renderCharacters()}</ul>
        </section>
      </main>
    </>
  );
}

export default App;
