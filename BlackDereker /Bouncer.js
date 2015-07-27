function bouncer(arr) {
  
  var filtered = arr.filter(notNull);
  
  
  
  return filtered;
}

function notNull(value){
    
    
    return value != null && value != false;
        
    
    
}
    
bouncer([7, 'ate', '', false, 9]);