## 1929. Concatenation of Array

**Source**: [leetCode](https://leetcode.com/problems/concatenation-of-array/)  
**Difficulty**: Easy   
**Brief**:     
Given an integer array ``nums`` of length ``n``, you want to create an array ``ans`` of length ``2n`` where ``ans[i] == nums[i]`` and ``ans[i + n] == nums[i]`` for ``0 <= i < n`` **(0-indexed)**.   

Specifically, ``ans`` is the concatenation of two ``nums`` arrays.   
 
Return the array ``ans``.   

### Example 1:
**Input**: ``nums = [1,2,1]``
**Output**: ``[1,2,1,1,2,1]``



### Solution 1:
**Runtime**: ``92ms``
**Memory**: ``41.7MB`` 
```
var getConcatenation = function(nums) {
    return nums.concat(nums);
};
``` 


### Solution 2:   
**Runtime**: ``80ms``   
**Memory**: ``41.9MB``   
```
var getConcatenation = function(nums) {
    let ans=Array(nums.length*2).fill(0);
    for(let i=0; i<nums.length; i++){
        ans[i]=nums[i];
        ans[i+nums.length]=nums[i]
    };
    return ans;
};
``
