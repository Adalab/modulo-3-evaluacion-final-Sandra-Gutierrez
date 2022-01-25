import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

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
  const handleChangeFilterName = (value) => {
    setFilterName(value);
  };
  const handleChangeFilterHouse = (value) => {
    setFilterHouse(value);
  };

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
        <CharacterList data={data} filterName={filterName} />
      </main>
    </>
  );
}

export default App;
