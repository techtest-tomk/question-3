const checkIfValidKeyOrThrow = (retrievedValue, traversalObj, key) => {
  if (!!retrievedValue) return;

  throw Error(
    `Provided key "${key}" is not in object. 
    Valid keys: ${Object.keys(traversalObj)}
    Object: ${JSON.stringify(traversalObj)}`
  )
}

const getItemValue = (traversalObj, items, position = 0) => {
  const key = items[position];
  const retrievedValue = traversalObj[key];
  checkIfValidKeyOrThrow(retrievedValue, traversalObj, key);

  if (position === items.length - 1) return retrievedValue;

  return getItemValue(retrievedValue, items, position + 1);
};

const getValueFromObject = (key, obj) => {
  const items = key.split("/");
  return getItemValue(obj, items);
};

module.exports = getValueFromObject;