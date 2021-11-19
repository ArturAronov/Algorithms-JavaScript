function fearNotLetter(str) {
  const alphabet="abcdefghijklmnopqrstuvwxyz";
  const startIndex=alphabet.indexOf(str[0]);

  if (str===alphabet) {
    return undefined;
  } else {
    for(let i=startIndex; i<str.length+startIndex; i++) {
      if(str[i-startIndex]!==alphabet[i]) return alphabet[i];
    };
  };
};

fearNotLetter("abce")
//returns 'd'