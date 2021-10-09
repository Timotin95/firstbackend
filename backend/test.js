// const axios = require('axios').default;
// const fs= require('fs')
// const parseString = require('xml2js').parseString;

// axios.get('https://www.cbr-xml-daily.ru/daily.xml')
//   .then(response => {
//     // console.log(response.data.url);
//     // console.log(response.data.explanation);
//     // console.log(response.headers);
//     parseString(response.data, function (err, result) {
//       console.log(result); // returns a json array
//       // this.events = result // nothing happens
//       fs.writeFile('rate.json', JSON.stringify(result), (err)=>{
//         if (err) console.log('error')
//       })
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });