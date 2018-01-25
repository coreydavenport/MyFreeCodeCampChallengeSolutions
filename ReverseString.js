function revString(str){
	var strArr = str.split("");
  //console.log(strArr);
  var revStrArr = strArr.reverse();
  //console.log(revStrArr);
	var revStrArrJoin = revStrArr.join("");
   return console.log(revStrArrJoin);



}

revString("gum");