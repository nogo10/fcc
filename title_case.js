 function titleCase(str) {
  str = str.split(" "); // the empty string with a space parameter prevents comma seperated items
  var ttt = 0;
  var x = ''
  for (ttt in str){ 
          str[ttt]= str[ttt].toLowerCase();//replace all into LowerCase
          str[ttt] = str[ttt].replace(str[ttt].charAt(0), str[ttt].charAt(0).toUpperCase());//replace first letter with UpperCase
      }
      
    str=str.join(' '); //joins array items into a string
    console.log(str);
    return str
  ;}
titleCase("I\'m A LiTTle tEa pot");