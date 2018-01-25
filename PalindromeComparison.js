

//This is the solution I came up with, and it worked for simple words, but did not account for punctuation unfortunately.

function palindrome(str) {
  // Good luck!
  
  var reversed = str.split('').reverse().join('').toLowerCase();
  reversed = reversed.replace(/[\W_]/g, '');
  //console.log(reversed);
  if(str == reversed){
    return true;
  } else {
    return false;
  }
}



palindrome("eye"); 

