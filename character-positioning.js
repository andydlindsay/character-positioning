var countLetters = function(inputString) {
  var returnObj = {};
  inputString = inputString.split(" ").join("");
  for (var i = 0; i < inputString.length; i++) {
    // check if returnObj has a key of inputString[i]
    if (returnObj.hasOwnProperty(inputString[i])) {
      returnObj[inputString[i]].push(i);
    } else {
      returnObj[inputString[i]] = [i];
    }
  }
  return returnObj;
};
console.log(countLetters("lighthouse in the house"));
