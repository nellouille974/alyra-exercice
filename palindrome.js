function reverse(mot) {
  var envers = "";
  for(i = mot.length - 1; i >= 0; i--){
    envers = envers + mot[i];
  }
  return envers;
}

function palindrome(mot) {
  if(reverse(mot) === mot) {
    console.log("good");
  }
  else{
    console.log("raté");
  }
}
palindrome("anna");