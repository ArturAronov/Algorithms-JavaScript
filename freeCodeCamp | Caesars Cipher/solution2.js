function rot13(str) {
  return str.split('').map(element=>{
    const ascii=element.charCodeAt(0);
    if(ascii<65||ascii>90){
      return String.fromCharCode(ascii)
    } else if (ascii<78) {
      return String.fromCharCode(ascii+13)
    } else if (ascii>=78) {
      return String.fromCharCode(ascii-13)
    };
  }).join('');
};
