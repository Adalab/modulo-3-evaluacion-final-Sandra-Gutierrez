import logoHogw from "../images/hogwartsEscudo-500x500.png"

const callToApi = (house) => {
    return fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => response.json())
      .then((response) => {
        const cleanData = response.map((character, index) => {
          return{
            id: `${character.house.toLowerCase()}-${index}`,
            name: character.name,
            species: character.species,
            house: character.house,
            gender: character.gender,
            alive: character.alive,
            hogwartsStudent: character.hogwartsStudent,
            image: character.image ? character.image : logoHogw
          }
        })
        return cleanData;
      });
  };
  
export default callToApi;