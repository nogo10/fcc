function slasher(arr, howMany) {
  
  var head = [];
  
  if(howMany < 1){
      return arr;
  }
  
  if(arr.length <= howMany){
      return head;
  }
  
  for(var i = howMany; i < arr.length; i++){
      
      head.push(arr[i]);
      
  }
  
  return head;
}

slasher([1, 2, 3], 2);
