const isTheWordSplit = (pArray) => {
  let result = pArray[0];
  let newArray = pArray[1].split(",");
  for (let item = 0; item < newArray.length; item++) {
    for (let element = 0; element < newArray.length; element++) {
      if (newArray[item] + newArray[element] == result) {
        return newArray[item] + "," + newArray[element];
      }
    }
  }
  return "not possible";
};

export { isTheWordSplit };
