import logoHogw from "../images/hogwartsEscudo-500x500.png"

const callToApi = (house) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => response.json())
      .then((response) => {
        const cleanData = response.map((character, index) => {
          return{
            id: index,
            name: character.name,
            species: character.species,
            house: character.house,
            gender: character.gender,
            alive: character.alive,
            image: character.image ? character.image : logoHogw
          }
        })
        return cleanData;
      });
  };
  
export default callToApi;