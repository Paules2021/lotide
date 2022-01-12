const without = function(arr1, arr2){
 let final = arr1
  for (let i = 0; i < arr1.length; i++) {
      for (let j=0 ; j<arr2.length ; j++)
      if (arr1[i] === arr2[j]) {
      final.splice(i,1)
    }
 } return final;
}

console.log(without(["1", "2", "3"], [1, 2, "3"]) )
