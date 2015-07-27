function end(str, target) {
  
  var words = str.split(" ");
  
    if(lastLetter(str) === target){
        return true;
    }
    else if(words.length > 1){
        if(words[words.length -1] === target){
            return true;
        }
    }
    
  
  return false;
}

function lastLetter(str){
  
  return str[str.length - 1];
  
}

end("Bastian", 'n');



//I let you finish I call it a night for now..maybe tommorow sam time?
//Sure; I will leave the terminal open..anyways cloud9 never sleeps..use it
//Ok, good night :)