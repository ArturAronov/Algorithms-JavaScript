## Your order, please   
**Source**: [CodeWars](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)   
**Difficulty**: 6 kyu   
**Brief**:    
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.   
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).   
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.   

### Example   
**Input**: ``"4of Fo1r pe6ople g3ood th5e the2"``   
**Output**: ``"Fo1r the2 g3ood 4of th5e pe6ople"``   
**Explanation**:   

### Solution   
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function order(words){
  const arr=words.split(' ');
  const result=new Array(arr.length).fill(0);
  
  for(let i=0; i<arr.length; i++){
    const num=Number(arr[i].match(/\d+/))-1;
    result.splice(num,1,arr[i]);
  };
  return result.join(' ');
};
``` 

### Tags
- fill array
- splice
- for loop
