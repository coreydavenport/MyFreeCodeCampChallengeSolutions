function findLongestWord(str) {
  var newArr = str.split(" ");
  var strLengthArr = []; //this is to store length of each newArr entry
  var greatestLength = 0;
  //console.log(newArr);
  // Let's loop through newArr, and determine which entry is longest
  for (var i = 0; i < newArr.length; i++) {
  	strLengthArr.push(newArr[i].length);
  }
  //console.log(strLengthArr);
  
  for (var j = 0; j < strLengthArr.length; j++) {
  	if (strLengthArr[j] > greatestLength) {
    	greatestLength = strLengthArr[j];
    } 
  }
  //console.log(greatestLength);
  return greatestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
