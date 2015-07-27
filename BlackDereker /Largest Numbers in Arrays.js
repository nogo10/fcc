function largestOfFour(arr) {
    var high=[]
 for (var x=0; x<4;x++){
     high[x]=0
  for (var y=0; y<4; y++){
   if (arr[x][y] > high[x]){
       high[x] = arr[x][y];
        }
    //console.log(high);
    }   
    //console.log(high);
 }
 return high
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//If you want to say something to me, just write on the Terminal, ok?



//If you want to skip this challenge, just copy my code.actually dont let me hold you back go ahead with the other challenges
//Ok :D I will create a file then

//==============================================================================================================================================
/*
 function largestOfFour(arr) {
  
   var bestArray = [];
  
   for(var i = 0; i < arr.length; i++){
      
       var array = arr[i];
      
      bestArray[bestArray.length] = largestNumber(array);
      
   }
  
   return bestArray;
 }

 function largestNumber(array){
    
    var number = 0;
    
    for(var i = 0; i < array.length; i++){
        
        var localNumber = array[i];
        
         if(localNumber > number){
             number = localNumber;
         }
        
     }
    
     return number;
 }

 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 
 */