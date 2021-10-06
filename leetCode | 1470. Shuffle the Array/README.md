## 1470. Shuffle the Array

**Source**: [leetCode](https://leetcode.com/problems/shuffle-the-array/)   
**Difficulty**: Easy   
**Brief**:     
Given the array ``nums`` consisting of ``2n`` elements in the form ``[x1,x2,...,xn,y1,y2,...,yn]``.

Return the array in the form ``[x1,y1,x2,y2,...,xn,yn]``.   

### Example:   
**Input**: ``nums = [2,5,1,3,4,7], n = 3``   
**Output**: ``[2,3,5,4,1,7]``   
**Explenation**:   
Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].   



### Solution:
**Runtime**: ``109ms``    
**Memory**: ``40.5MB``    
```
var shuffle = function(nums, n) {
  let result=[];
    for(let i=0; i<nums.length/2; i++){
        result.push(nums[i], nums[i+n]);
    };
    return result;
};
```
