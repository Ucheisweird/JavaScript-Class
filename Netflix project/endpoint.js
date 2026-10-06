const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTFmMWI3OTYyMmVjYjc1MzQ4N2QwZjQyMWJmNTcwMSIsIm5iZiI6MTc5MDI0MTE5MC4xODIwMDAyLCJzdWIiOiI2YWI0ZTlhNjk3ODA4MTJhYmNmYTE1NGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2g8Ntxyoaeap2kIn6K6_eZsHmWXxqn6jkUsQGCsHanI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

//   poster
//   original name
//   rating
//   overview
//   genre
//   release date
//   popularity