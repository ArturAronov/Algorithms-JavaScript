## 1480. Running Sum of 1d Array

**Source**: [leetCode](https://leetcode.com/problems/running-sum-of-1d-array/)    
**Difficulty**: Easy   
**Brief**:   
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).    
Return the running sum of nums.    

### Example 1:
**Input**: ``nums = [3,1,2,10,1]``   
**Output**: ``[3,4,6,16,17]``   
**Explanation**:   
Running sum is obtained as follows: [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1]   

### Solution 1:
**Runtime**: ``76 ms``   
**Memory**: ``40.1 MB``   
```
var runningSum = function(nums) {
  for(let i=1; i<nums.length; i++){
    nums[i]+=nums[i-1];
  };
  
  return nums;
};
```
