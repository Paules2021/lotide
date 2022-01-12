const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toUpperCase()
  let arrSentence = sentence.split('')

  for (let i = 0 ;i<arrSentence.length ; i++) {
    const arr=arrSentence[i]
    if(arr !== " "){
    if (results[arr]) {
      results[arr].push(i);
      }else {
        results[arr]=[i]
      }
  }
  }
  return results;
  };

const phrase = "lighthouse in the house";
console.log(letterPositions(phrase));

/*
const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toUpperCase()

  for ( const letter of sentence) {
    if (results[letter]) {
      results[letter].push(sentence.indexOf(letter));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  }
  return results;
}
*/