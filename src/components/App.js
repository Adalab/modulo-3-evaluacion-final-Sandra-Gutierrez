import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";

console.log("( => Ready! )");

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(
    ls.get("filterHouse", "Gryffindor")
  );
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterStudent, setFilterStudent] = useState(false);
  const [filterAlive, setFilterAlive] = useState(undefined);
  
  // Variables
  const infoRoute = useRouteMatch("/character/:characterId");

  // LocalStorage
  useEffect(() => {
    ls.set("filterName", filterName);
    ls.set("filterHouse", filterHouse);
    ls.set("filterGender", filterGender);
  }, [filterName, filterHouse, filterGender]);

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
  const handleChangeFilterGender = (value) => {
    setFilterGender(value);
  };
  const handleChangeFilterStudent = (value) => {
    setFilterStudent(value);
  };
  const handleChangeAlive = (value) => {
    setFilterAlive(value === "alive" ? true : value === "notAlive" ? false : true);
  }
  const handleBtnReset = () => {
    setFilterName("");
    setFilterHouse("Gryffindor");
    setFilterGender("");
  };

  // Filtered functions
  const filteredCharacters = data
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterGender === "" ? true : character.gender === filterGender;
    })
    .filter((character) => {
      return filterStudent ? character.hogwartsStudent : true;
    }) 
    .filter((character) => {
      return filterAlive ? character.alive === true : filterAlive === false ? character.alive === false : true;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  // Render Functions
  const renderCharacterDetail = () => {

    const characterDetails =
    infoRoute !== null ? infoRoute.params.characterId : "";    
    const selectedCharacter = data.find(
      (eachData) => eachData.id === characterDetails
    );
    return selectedCharacter || { name: "El personaje no existe",
    species: "undefined",
    gender: "undefined",
    house: "undefined",
    alive: false,
    image: "undefined",
    id: "undefined"
  }
  };

  const renderBackgroundDetail = () => {
    if(infoRoute !== null){
      return filterHouse === "Gryffindor"
      ? "backGryff"
      : filterHouse === "Slytherin"
      ? "backSlyth"
      : filterHouse === "Ravenclaw"
      ? "backRav"
      : filterHouse === "Hufflepuff"
      ? "backHuff"
      : "";
    }else{
      return "";
    }
  };

  // React Render HTML
  return (
    <>
      <header className="header">
        <h1 className="header__title">Expecto Patronum !</h1>
      </header>
      <main className={`main ${renderBackgroundDetail()}`}>
        <Switch>
          <Route exact path="/">
            <Filters
              filterName={filterName}
              filterHouse={filterHouse}
              filterGender={filterGender}
              filterStudent={filterStudent}
              filterAlive={filterAlive}
              handleChangeFilterName={handleChangeFilterName}
              handleChangeFilterHouse={handleChangeFilterHouse}
              handleChangeFilterGender={handleChangeFilterGender}
              handleChangeFilterStudent={handleChangeFilterStudent}
              handleChangeAlive={handleChangeAlive}
            />
            <button className="main__btnReset" onClick={handleBtnReset}>
              Reset
            </button>
            <CharacterList
              data={filteredCharacters}
              filterName={filterName}
              filterHouse={filterHouse}
            />
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
