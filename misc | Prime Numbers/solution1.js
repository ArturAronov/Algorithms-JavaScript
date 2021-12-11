function isPrime(num, i=2){
  if(i>=num){
    return true;
  }else if(num%i===0){
    return false;
  }else{
    return isPrime(num, i+=1);
  };
};
