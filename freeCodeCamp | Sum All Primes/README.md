## Sum All Primes

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)    
**Difficulty**: Intermediate    
**Brief**:     
A *prime number* is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.   
Rewrite ``sumPrimes`` so it returns the sum of all prime numbers that are less than or equal to num.   

### Solution:
**Runtime**: ``N/A``   
**Memory**: ``N/A``  
```
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
```
