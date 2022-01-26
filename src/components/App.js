import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
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
  const [idCharacter, setIdCharacter] = useState("");

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
  };

  // Render Functions
  const renderCharacterDetail = (props) => {
    const routerId = props.match.params.characterId;
    console.log(routerId);
    const foundCharacter = data.find((character) => character.id === routerId );
    return <CharacterDetail character={foundCharacter}/>
  }

  // React Render HTML
  return (
    <>
      <header>
        <h1>Esto va de Harry Potter...</h1>
      </header>

      <main>
        <Switch>
          <Route exact path='/'>
            <Filters
              filterName={filterName}
              filterHouse={filterHouse}
              handleChangeFilterName={handleChangeFilterName}
              handleChangeFilterHouse={handleChangeFilterHouse}
            />
            <CharacterList
              data={data}
              filterName={filterName}
              handleClickCharacter={handleClickCharacter}
            />
          </Route>
          <Route exact path='/character/:characterId' render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
}

export default App;
