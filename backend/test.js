// const axios = require('axios').default;
// const fs= require('fs')
// const url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml'
// var parser = require('xml2json')

// axios.get(url)
//   .then(response => {
//     let GetDATA = parser.toJson(response.data)
//     // parseString(response.data, function (err, result) {
//     //   console.log(result); // returns a json array
//     //   fs.writeFile('rate.json', JSON.stringify(result), (err)=>{  //saves XML from API to JSON 
//     //     if (err) console.log('error')
//     //   })
//     });
//     .catch(error => {
//     console.log(error);
//   });
// // const parseString = require('xml2js').parseString;

// // axios.get('https://www.cbr-xml-daily.ru/daily.xml')
// //   .then(response => {
// //     // console.log(response.data.url);
// //     // console.log(response.data.explanation);
// //     // console.log(response.headers);
// //     parseString(response.data, function (err, result) {
// //       console.log(result); // returns a json array
// //       // this.events = result // nothing happens
// //       fs.writeFile('rate.json', JSON.stringify(result), (err)=>{
// //         if (err) console.log('error')
// //       })
// //     });
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   });


const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

const parser = new xml2js.Parser();

fs.readFile('example.xml', (err, data) => {
	parser.parseString(data, (err, result) => {
		console.log(util.inspect(result, false, null, true));
	});
});