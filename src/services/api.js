
const callToApi = (house) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => response.json())
      .then((response) => {
        const cleanData = response.map((character, index) => {
          return{
            id: index,
            name: character.name,
            species: character.species,
            house: character.species,
            gender: character.gender,
            alive: character.alive,
            image: character.image
          }
        })
        return cleanData;
      });
  };
  
export default callToApi;