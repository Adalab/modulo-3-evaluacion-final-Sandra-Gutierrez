import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";

console.log("( => Ready! )");

function App() {
  // Estado
  const [data, setData] = useState([]);
  // Api
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  // Handle Functions
  // Render Functions
  const renderCharacters = () => {
    return data.map((character, index) => {
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
          <form action=""></form>
        </section>
        <section>
          <ul>{renderCharacters()}</ul>
        </section>
      </main>
    </>
  );
}

export default App;
