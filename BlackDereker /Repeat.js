function repeat(str, num) {
  
  if(num < 0){
      return "";
  }
  
  var word = str;
  
  for(var i = 1; i < num; i++){
     str += word;
  }
  
  return str;
}

repeat('abc', 3);