function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //check length of target, save it and compare with str tail
  var len = target.length;
  var subst = str.substring(str.length-len);
  if (subst === target){console.log("true");return true;} else {console.log("false");return false}
  return str;
}

end('Walking on water and developing software from a specification are easy if both are frozen.', 'specification');