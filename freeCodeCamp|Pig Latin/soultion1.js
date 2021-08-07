function translatePigLatin(str) {
  const constants=['b','c','d','f','g','j','k','l','m','n','p','q','s','t','v','x','z','h','r','w','y'];
  let strArr=str.split('');
  let i=0;

  while(constants.includes(strArr[0])&&i<str.length){
    strArr.push(strArr[0]);
    strArr.shift();
    i++;
  };

  if(constants.includes(str[0])){
    return strArr.join('')+'ay'
  }else{
    return strArr.join('')+'way'
  };
  
};

translatePigLatin("schwartz");
//Returns artzschway
