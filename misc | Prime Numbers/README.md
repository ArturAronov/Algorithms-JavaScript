## Prime Numbers

### Solution 1 - recursion:
**Runtime**: ``N/A``  
**Memory**: ``N/A``  
```
function isPrime(num, i=2){
  if(i>=num){
    return true;
  }else if(num%i===0){
    return false;
  }else{
    return isPrime(num, i+=1);
  };
};
```

### Solution 2 - for loop:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function isPrime(num){
  for(let i=2; i<num; i++){
    if(num%i===0){
      return false;
    };
  };
  return true;
};
```
