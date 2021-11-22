const request = require('request');

fetchBreedDescription = function(breedName) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  let data = request(url, function(error, response, body) {
    if (error) {
      console.error('error:', error); // Print the error if one occurred
      return error;
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
    const bod = JSON.parse(body);
    //console.log(bod)
    return bod;
  });
  return data;
};

module.exports = { fetchBreedDescription };