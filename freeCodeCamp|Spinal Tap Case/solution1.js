function spinalCase(str) {
  const lower=/[a-z]/;
  const capital=/[A-Z]/;

  return str.split('').map((element, index)=>{
    if(capital.test(element)&&lower.test(str[index-1])&&index!==0){
      return '-'+element
    }else if(!lower.test(element)&&!capital.test(element)){
      return '-'
    }else{
      return element
    }
  }).join('').toLowerCase();
};
