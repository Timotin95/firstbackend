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
const router = express.Router();
const { getAll, get } = require('./src/rates')
// ROUTER 
// const ROUTER = require('./router')
// app.use(express.static(path.resolve(__dirname, 'client')) )
app.get('/', async (req, res)=> {
  res.send(await getAll());
})

app.get('/:code', async (req, res)=> {
  const { code } = req.params;
  const rate = await get(code);

  if (!rate) {
    res.statusCode = 404;
    res.send('Not Found');
  } else {
    res.statusCode = 200;
    res.send(rate);
  }
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
