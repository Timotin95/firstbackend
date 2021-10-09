//Стартует сервер. +++
// Вытягивает данные из АПИ банка +++
// Сохраняет данные в базу данных +++
// Маршрутизация
// динамичность


const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000 // SERVER PORT
const url = 'https://www.cbr-xml-daily.ru/daily.xml' // API URL XML


const axios = require('axios').default; //For GET FILE FROM API
const fs= require('fs') // file system
const parseString = require('xml2js').parseString; // convert XML to JSON

// ROUTER 
app.use(express.static(path.resolve(__dirname, 'client')) )
app.get('*', (req, res)=> {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})




//START SEVER

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`)
})
/////////////////////////////////////////////////////

// GET DATA FROM API TO FILE 
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
  });
/////////////////////////////////////////////////////



