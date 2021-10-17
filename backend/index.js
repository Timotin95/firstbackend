//Стартует сервер. +++
// Вытягивает данные из АПИ банка +++
// Сохраняет данные в базу данных +++
// Маршрутизация
// динамичность
// Сохронять в переменную JSON

const express = require('express')
const app = express()
const path = require('path')
const url = require('url')
const PORT = process.env.PORT || 3000 // SERVER PORT
const TESTD = require('./test.json')
const router = express.Router();
const DATAJSON = require('./rate.json')
const GetDATA = require('./src/getdataformAPI') //get data from api 
// ROUTER 
// const ROUTER = require('./router')
// app.use(express.static(path.resolve(__dirname, 'client')) )
app.get('/', (req, res)=> {
  res.send(TESTD.Valute)

  // res.sendFile(path.resolve(__dirname, './', TESTD));
// })
  // res.sendFile(path.resolve(__dirname, './', TESTD));
})
app.get('/AMD', (req, res)=> {
  res.send(TESTD.Valute.AMD)
})
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// // define the home page route
// router.get('/', function(req, res) {
//   res.send('GET request to the homepage');
//   // res.send(JSON.stringify(DATAJSON, null, 1));
// });




//START SEVER

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`)
})
/////////////////////////////////////////////////////

GetDATA();