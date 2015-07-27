/*
I need to review strings.. do a for in loop and check and keep longest word in a var? 

Ok im here

Split a string into an array of substrings:
var str = "How are you doing today?";
var res = str.split(" "); result of res will be an array with the values:
How,are,you,doing,today? 
ok, no problem

*/

// function findLongestWord_v1(str) {
//  var i = [];
//  var count = 0;
//  var high = 0;
//  i= str.split("");
//  console.log(i) 
//  for (count in str){
//      if (str[count] > str[count+1]){ 
//          high = str[count]
//      } else {high = str[count+1];} 
//  }
 
//   return high;
// }

//hey mine worked

findLongestWord('The quick brown fox jumped over the lazy dog');

//I will do mine here ok?

//Any questions about my code? its good it works fine.... Did you understand my code? it's good to know what are you pasting in freecodecamp

//So another file? For the next challenge. Yes I was using for in loop ..yours is clear using word.length directly..ok next

//Do another file

function findLongestWord(str) {
 
 var words = str.split(" ");
 
 var longest = 0;
 
 for(var i = 0; i < words.length; i++){
  
  var word = words[i];
  
  console.log(word);
  if(longest < word.length){
   longest = word.length;
   str = word;
   
  }
  
 }
 
  return str.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

