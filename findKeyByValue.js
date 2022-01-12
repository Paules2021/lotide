const findKeyByValue =function(inputObject,inputValue){
  let objectKeys=Object.keys(inputObject)
  for(const object of objectKeys){
    if(inputObject[object]===inputValue){
      return object
  }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log((findKeyByValue(bestTVShowsByGenre, "The Wire")))
