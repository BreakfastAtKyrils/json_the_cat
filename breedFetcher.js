const request = require('request');


const breedFetcher = function(){
  var args = process.argv.slice(2);
  let breed = args[0];
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

 
    let data = request(url, function (error, response, body) {
      if (error){
        console.error('error:', error); // Print the error if one occurred
      }
     
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.
      // console.log(typeof(data))
      const bod = JSON.parse(body)
      //console.log(bod)
      console.log(bod[0].weight.imperial)
     return bod;
  
    });
  
  }
  //console.log('Error: breed not found')

breedFetcher()