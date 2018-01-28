function rot13(str) { // LBH QVQ VG!
  
  var arr = str.split("");
  //console.log(arr);
  var codedArr = [];
  
  var decodedArr = [];
  
  var decodedStr = "";
  
  for (var i = 0; i < arr.length; i++) {
    codedArr.push(arr[i].charCodeAt());
  }
  
  //console.log(codedArr);
  
  for (var j = 0; j < codedArr.length; j++) {
    if (codedArr[j] < 65 || codedArr[j] > 90) {
      decodedArr.push(String.fromCharCode(codedArr[j]));
    } else if (codedArr[j] < 78) {
      decodedArr.push(String.fromCharCode(codedArr[j] + 13));
    } else {
      decodedArr.push(String.fromCharCode(codedArr[j] - 13));
    }
    

  }
  // decodedArr.push(codedArr[j].fromCharCode());
  decodedStr = decodedArr.join("");
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
