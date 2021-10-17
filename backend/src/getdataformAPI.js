// Gets data from API and saves it to the JSON file 



const axios = require('axios').default; //For GET FILE FROM API
const fs= require('fs') // file system
const parseString = require('xml2js').parseString; // convert XML to JSON
const util = require('util');
// var parser = require('xml2json');
const url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml'


// GET DATA FROM API TO FILE 
function GetDATA() {
axios.get(url)
  .then(response => {
    parseString(response.data, function (err, result) {
      console.log(result); // returns a json array
      fs.writeFile('rate.json', JSON.stringify(result), (err)=>{  //saves XML from API to JSON 
        if (err) console.log('error')
      })
    });
  })
  .catch(error => {
    console.log(error);
  });}
/////////////////////////////////////////////////////
module.exports = (GetDATA); 