function fearNotLetter(str) {
  const alphabet="abcdefghijklmnopqrstuvwxyz";
  const startIndex=alphabet.indexOf(str[0]);
  const shortAlphabet=alphabet.split('').splice(startIndex, str.length+1);

  if (str===alphabet) {
    return undefined;
  } else {
    for(let i=0; i<str.length; i++) {
      if(shortAlphabet[i]!==str[i]) {
        return shortAlphabet[i];
      };
    };
  };
};

fearNotLetter("abce")
//returns 'd'