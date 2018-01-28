function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function truthy(val){
    return val;
  }
  
  var filterFalse = arr.filter(truthy);
  
  return filterFalse;
}

bouncer([7, "ate", "", false, 9]);
