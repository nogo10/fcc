function palindrome(str) {
 
  str = str.toLowerCase();
  
  var list = [];
 
 
  for(var i = 0; i < str.length; i++){
      
      list[i] = str[i].toString();
  }
  
  list.reverse();
  
  var reverseStr = "";
  
  for(var j = 0; j < list.length; j++){
      
      reverseStr += list[j];
      
  }
console.log(reverseStr.match(/[a-z]/g).join().toString());
console.log(str.match(/[a-z]/g).join().toString()); //ok [a-z] means search for any letter
  if(str.match(/[a-z]/g).join().toString() !== reverseStr.match(/[a-z]/g).join().toString()){
      return false;
  }
  //Check if works
  
  return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
