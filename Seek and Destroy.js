
function destroyer(arr) {
  // Remove all the values
 var args = Array.prototype.slice.call(arguments);
 //console.log(args);
 for (i = 0; i < arr.length; i++){
 	for (j = 0; j < args.length; j++){
  	if (arr[i] === args[j]) {
    	delete arr[i];
    }
  }
 }
 return arr.filter(Boolean);

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
