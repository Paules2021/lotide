const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  }
  return `Assertion Failed: ${actual} !== ${expected}`;
};

const countLetters = function(sentence){
  let result = {};
  sentence = sentence.toUpperCase()

  for ( const letter of sentence) {
    if(letter !== " "){
    if (result[letter]) {
      result[letter]++;
      
    } else {
      result[letter] = 1
    }
    }
  }
  return result;
}

const phrase = "lighthouse in the house";
console.log(countLetters(phrase));
