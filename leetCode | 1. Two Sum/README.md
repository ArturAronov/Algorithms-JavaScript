## 1. Two Sum

**Source**: [leetCode](https://leetcode.com/problems/two-sum/)   
**Difficulty**: Easy   
**Brief**:     
Given an array of integers ``nums`` and an integer ``target``, return *indices of the two numbers such that they add up to ``target``*.   

You may assume that each input would have ***exactly*** **one solution**, and you may not use the same element twice.    

You can return the answer in any order.    

### Example:
**Input**: ``nums = [2,7,11,15], target = 9``   
**Output**: ``[0,1]``   
**Explanation**: Because nums[0] + nums[1] == 9, we return [0, 1].   



### Solution:
**Runtime**: ``144ms``   
**Memory**: ``39.7MB``   
```
var twoSum = function(nums, target) {
  const result=[];
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i]+nums[j]===target){
        result.push(i,j);
      };
    };
  };
  return result;
};
```
