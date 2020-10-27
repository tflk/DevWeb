var axios = require('axios');
console.log("azeazeaz")
var config = {
  method: 'get',
  url: 'https://www.quandl.com/api/v3/datasets/FRED/GDP.csv?collapse=annual&rows=100&order=asc&column_index=1&api_key=NPNvyLfq_gF6JuFBkWV7',
 
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});