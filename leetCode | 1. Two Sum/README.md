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

**Step 1**: Declare empty array ``result``, where end result will be stored   
**Step 2**: Create 2 layered nested loop that iterates over ``nums`` array   
**Step 2.1**: Array ``i`` starts from index of 0 of ``nums``   
**Step 2.2**: Array ``j`` starts from position of ``i+1`` of ``nums`` (ie. if array ``i`` starts for index position 1, then array ``j`` starts from index position 2, this is to avoid any dublicate answers   
**Step 3**: If element in ``nums`` of index ``i`` and ``j`` sum to ``target`` value, then the index of those numbers gets pushed into ``result``   
**Step 4**: For the final step ``result`` gets returned
