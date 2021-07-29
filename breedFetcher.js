const fetch = require("node-fetch");
let arg = process.argv[2]

const getBreed = (breed) => {
  fetch(`https://api.hecatapi.com/v1/breeds/search?q=${breed}`)
    .then(function (response) {

      return response.json(); //JSON.parse(response)
    })
    .then(function (myJson) {
      const breedResult = myJson[0];
      if(!breedResult){
        console.log("No Breed Found!")
        return
      }
      console.log(breedResult.description);
    })
    .catch((e) => {
      console.log("No data found!")
      console.log(e);
    });
};

getBreed(arg)
