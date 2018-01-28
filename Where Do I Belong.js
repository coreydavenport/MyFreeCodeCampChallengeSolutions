
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort();
  var numIndex = 0;
  
  //console.log(sortedArr);
  // Now let's loop through sortedArr and determine the index num should be placed
  
  for ( var i = 0; i < sortedArr.length; i++ ) {
    if(sortedArr[i] < num) {
      numIndex ++;
    }
  }
  
  return numIndex;
}

getIndexToIns([40, 60], 50);
