export function orderByProps(obj, order) {
  const result = [];
  const usedKeys = new Set();


  for (const key of order) {
    if (Object.hasOwn(obj, key)) {
      result.push({ key, value: obj[key] });
      usedKeys.add(key);
    }
  }


  const remainingKeys = Object.keys(obj)
    .filter(key => !usedKeys.has(key))
    .sort();

  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}