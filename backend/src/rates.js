const { default: axios } = require("axios");
const { cache } = require("./cache");
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

async function fetchData() {
  return await cache('rates', 60 * 60 * 24, async () => {
    const { data } = await axios.get(url);
    return data;
  });
}

module.exports.getAll = async () => {
  const { Valute } = await fetchData();

  return Object.values(Valute);
}

module.exports.get = async (code) => {
  const { Valute } = await fetchData();

  return Valute[code];
}
