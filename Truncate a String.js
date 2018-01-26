



function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncStr = "";
  
  if (num <= 3) {
    truncStr = str.substring(0, num) + "...";
      //console.log(truncStr);
      // This is the desired effect
  } else if (str.length > num ) {
  	truncStr = str.substring(0, num - 3) + "...";
  } else {
    return str;
  }

  return truncStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
