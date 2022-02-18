## 217. Contains Duplicate

**Source**: [leetCode](https://leetcode.com/problems/contains-duplicate/)  
**Difficulty**: Easy   
**Brief**:     
Given an integer array ``nums``, return ``true`` if any value appears **at least twice** in the array, and return ``false`` if every element is distinct.   

### Example 1:
**Input**: ``nums = [1,2,3,1]``   
**Output**: ``true``   

### Example 2:
**Input**: ``nums = [1,2,3,4]``   
**Output**: ``false``    

### Solution:
**Runtime**: ``119ms``  
**Memory**: ``48MB``   
```
var containsDuplicate = function(nums) {
  const uniques=[...new Set(nums)];
  return nums.length!==uniques.length;
};
```
