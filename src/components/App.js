import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

console.log("( => Ready! )");

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [idCharacter, setIdCharacter] = useState('');

  // Api
  useEffect(() => {
    callToApi(filterHouse).then((response) => {
      setData(response);
    });
  }, [filterHouse]);

  // Handle Functions
  const handleChangeFilterName = (value) => {
    setFilterName(value);
  };
  const handleChangeFilterHouse = (value) => {
    setFilterHouse(value);
  };
  const handleClickCharacter = (id) => {
    setIdCharacter(id);
  }

  // React Render HTML
  return (
    <>
      <header>
        <h1>Esto va de Harry Potter...</h1>
      </header>
      <main>
        <Filters
          filterName={filterName}
          filterHouse={filterHouse}
          handleChangeFilterName={handleChangeFilterName}
          handleChangeFilterHouse={handleChangeFilterHouse}
        />
        <CharacterDetail data={data} idCharacter={idCharacter}/>
        <CharacterList data={data} filterName={filterName} handleClickCharacter={handleClickCharacter} />
      </main>
    </>
  );
}

export default App;
