const { default: axios } = require("axios");
const { cache } = require("./cache");
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

async function fetchData() {
  return await cache('rates', 60 * 60 * 24, async () => {
    const resp = await axios.get(url);
    const data = resp.data;
     return data.Valute;
  
  });
}
// async function fetchData() {

//     const resp = await axios.get(url);
//     const data = resp.data;
//      return data.Valute;
  
//   };

module.exports.getAll = async () => {
  const  Valute  = await fetchData();
  return Object.values(Valute);
}

module.exports.get = async (code) => {
  const  Valute  = await fetchData();

  return Valute[code];
  // return Object.values[code]
}
