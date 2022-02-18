## 1512. Number of Good Pairs   

**Source**: [leetCode](https://leetcode.com/problems/number-of-good-pairs/)  
**Difficulty**: Easy   
**Brief**:     
Given an array of integers ``nums``, return *the number of* ***good pairs***.   
A pair ``(i, j)`` is called *good* if ``nums[i] == nums[j]`` and ``i < j``.

### Example:
**Input**: ``nums = [1,2,3,1,1,3]``   
**Output**: ``4``   
**Explanation**: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.   


### Solution:
**Runtime**: ``89ms``   
**Memory**: ``38.6MB``   
```
var numIdenticalPairs = function(nums) {
  let result=0;
  
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      nums[i]===nums[j]?result++:null;
    };
  };
  return result;
};
```
