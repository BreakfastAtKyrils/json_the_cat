const {fetchBreedDescription} = require('./breedFetcher.js');
const breedName = process.argv[2];

function data(breedName, fetchBreedDescription) {
  
  const description = fetchBreedDescription(breedName);
  //console.log(description)
  return description;
}


const description = data(breedName, fetchBreedDescription);
console.log(description);

//fetchBreedDescription(breedName)