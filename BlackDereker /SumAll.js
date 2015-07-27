function sumAll(arr) {
    
    var sumArr = [];
    
   console.log(arr[0]);
   console.log(arr[1]);
    
   sumArr.push(arr[0]);
   sumArr.push(arr[1]);
   
   console.log(sumArr);
    
    var num = 0;
    
    if(sumArr[0] < sumArr[1]){
    
    console.log("Smaller")
    
    for(var j = sumArr[0]; j <= sumArr[1]; j++){
        
        num += j;
        
    }
    
    }
    
    else{
       
       console.log("Greater");
       
       for(var j = Math.min(sumArr[0], sumArr[1]); j <= Math.max(sumArr[0], sumArr[0]); j++){
        
        num += j;
        
    }
        
    }
    
  return num;
}

console.log(sumAll([1, 4]));