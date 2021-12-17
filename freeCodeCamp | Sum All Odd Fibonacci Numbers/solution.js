function sumFibs(num) {
  let result=1;
  let x=1;
  let y=1;
  let z=x+y;

  while (z<=num){
    z=x+y;
    x=y;
    y=z;

    x%2!==0?result+=x:null;
  };
  return result;
};
