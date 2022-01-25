
const callToApi = (house) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  };
  
export default callToApi;