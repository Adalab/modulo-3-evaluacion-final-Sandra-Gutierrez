import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
//import CharacterDetail from "./CharacterDetail";

console.log("( => Ready! )");

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  
  // Variables
  const infoRoute = useRouteMatch('/character/:characterId');

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

  // Filtered functions
  const filteredCharacters = data.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  // Render Functions
  const renderCharacterDetail = () => {
    if( infoRoute !== null){
          const routerId = parseInt(infoRoute.params.characterId);
    const foundCharacter = data.find((character) => character.id === routerId);
    return foundCharacter;
    }
  };

  // React Render HTML
  return (
    <>
      <header>
        <h1>Esto va de Harry Potter...</h1>
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              filterName={filterName}
              filterHouse={filterHouse}
              handleChangeFilterName={handleChangeFilterName}
              handleChangeFilterHouse={handleChangeFilterHouse}
            />
            <CharacterList data={filteredCharacters} filterName={filterName} />
          </Route>
          <Route path="/character/:characterId">
            <CharacterDetail data={renderCharacterDetail()} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
