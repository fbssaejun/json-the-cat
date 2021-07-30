const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err,response, body) => {
    const data = JSON.parse(body);
    if (response === null) {
      callback(err, null);
      return;
    }

    if (data[0] === undefined) {
      callback('No matching breeds', null);
      return;
    }

    callback(null, data[0]['description']);
    
  });
};

module.exports = {fetchBreedDescription};


//Another alternative way using fetch() method

// const fetch = require("node-fetch");


// const fetchBreedDescription = (breedName) => {
//   fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(myJson) {
//       const breedResult = myJson[0];
//       if (!breedResult) {
//         console.log("No Breed Found!");
//         return;
//       }
//       console.log(breedResult.description);
//     })
//     .catch((e) => {
//       console.log("No data found!");
//       console.log(e);
//     });
// };

// module.exports = {fetchBreedDescription}


// call function with one parameter (breedName) in index js
