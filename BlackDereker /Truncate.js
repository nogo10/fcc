function truncate(str, num) {
  
  num -= 2;
  
  if(str.length > num){
      str = str.slice(0, num -= 3);
      str+="...";
  }
  
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
