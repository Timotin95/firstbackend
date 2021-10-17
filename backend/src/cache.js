let cache = {};

module.exports.cache = async (key, seconds, cb) => {
  if (cache[key] && (Date.now() - seconds) > cache[key].lastCacheTime) {
    cache[key] = undefined;
  }

  if (!cache[key]) {
    cache[key] = {
      value: await cb,
      lastCacheTime: Date.now(),
    };
  }

  return cache[key].value;
}
