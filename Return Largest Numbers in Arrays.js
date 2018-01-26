function largestOfFour(arr) {
  // You can do this!
  var greatestArr = [];
  // I need to access each array within the initial array, and push the largest number from each into a new array
  for (var i = 0; i < arr.length; i++) {
    greatestArr.push(Math.max.apply(null, arr[i])); // Math.max.apply allows me to find the largest number in the given array

  }
  
  return greatestArr;
  
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
