const middle = function(arr){
  let middlearr=[]
  if (arr.length>2){
    let i = Math.floor(arr.length / 2)
    if (arr.length%2 !== 0){
      middlearr=arr.slice(i,i+1)
    }else if (arr.length%2 === 0){
      middlearr=arr.slice(i-1,i+1)
    }
  }return middlearr
}

console.log(middle([1, 2, 3 , 4, 5, 6]))

module.exports = middle;

/*
const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {

  } else if (array.length % 2 !== 0) {
    middleArr.push(array[Math.floor(array.length / 2)]);
  } else {
    middleArr.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  // Log and/or return the array of the middle element(s)
  console.log(middleArr);
  return middleArr;
};
*/