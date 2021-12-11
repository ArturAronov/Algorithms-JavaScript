function primes(iterations){
  //This empty array will eventually store all of the prime numbers
  const primesArr=[];

  //This array is filled with numbers starting with 2, and ending with N iterations
  const allNums=Array.from({length: iterations}, (_, i)=>i+2);
  for(let i=0; i<allNums.length; i++){
    isPrime(allNums[i])?primesArr.push(allNums[i]):null;
  };
  return primesArr;
};

console.dir(primes(100), {'maxArrayLength': null})
