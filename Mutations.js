function mutation(arr) {
  var str1 = arr[1].toLowerCase();
  var str2 = arr[0].toLowerCase();
  
  for (var i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) 
      return false;
  }
      return true;
}

mutation(["hello", "hey"]);
