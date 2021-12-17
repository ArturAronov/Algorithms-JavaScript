function sumPrimes(num) {
  function isPrime(n, i=2){
    if(i>=n){
      return true;
    }else if(n%i===0){
      return false;
    }else{
      return isPrime(n, i+=1);
    };
  };
  
  let primeSum=0;
  for(let i=2; i<=num; i++){
    isPrime(i)?primeSum+=i:null;
  };
  
  return primeSum;
};
