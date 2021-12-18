## Drop it

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it)  
**Difficulty**: Intermediate   
**Brief**:     
Given the array ``arr``, iterate through and remove each element starting from the first element (the 0 index) until the function ``func`` returns ``true`` when the iterated element is passed through it.  
Then return the rest of the array once the condition is satisfied, otherwise, ``arr`` should be returned as an empty array.   

### Example:
**Input**: ``[1, 2, 3, 4], function(n) {return n >= 3;}``   
**Output**: ``[3, 4]``   
**Explanation**:
Since the ``func`` is a function that verifies whether the parameter passed is bigger or equal to 3, the first two values of 1,2 in the array will be removed.


### Solution (recursion):
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function dropElements(arr, func) {
  if(func(arr[0])){
    return arr;
  }else if(!arr.length){
    return arr;
  }else{
    return dropElements(arr.splice(1, arr.length), func);
  };
};
```
