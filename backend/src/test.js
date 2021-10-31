const axios = require('axios');

async function makeGetRequest() {

  let res = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

  let  data  = res.data;
  console.log(data);
  console.log(typeof(data))
}

makeGetRequest();