## Sum All Numbers in a Range

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)  
**Difficulty**: Intermediate  
**Brief**:    
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.   

### Example 1:
Input: ``sumAll([4,1])``
Output: ``10`` 
Explanation: ``4+3+2+1=10``


### Solution 1:
#### Runtime: ``N/A``, Memory: ``N/A``: 
```
function sumAll(arr) {
  let result=0;
  for(let i=Math.min(...arr); i<=Math.max(...arr); i++) {
    result+=i;
  };
  return result;
};
```
**Step1**: declare variable ``result`` start stores 0   
**Step2**: create for-loop where ``i`` gets assigned the lowest value of array and loop stops once it reaches higher value of array    
**Step3**: on each iteration the value of ``result`` gets incremented by the value of ``i``  

