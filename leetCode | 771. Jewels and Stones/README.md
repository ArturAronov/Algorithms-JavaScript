## 771. Jewels and Stones

**Source**: [leetCode](https://leetcode.com/problems/jewels-and-stones/)  
**Difficulty**: Easy   
**Brief**:     
You're given strings ``jewels`` representing the types of ``stones`` that are jewels, and ``stones`` representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so ``"a"`` is considered a different type of stone from ``"A"``.   

### Example 1:
**Input**: ``jewels = "aA", stones = "aAAbbbb"``   
**Output**: ``3``   


### Solution 1:
**Runtime**: ``84ms``   
**Memory**: ``40.3MB``   
```
var numJewelsInStones = function(jewels, stones) {
  let result=0;
  for(let i=0; i<stones.length; i++){
    for(let j=0; j<jewels.length; j++){
      if(jewels[j]===stones[i]){
        result+=1;
      };
    };
  };
  return result;
};
```

### Solution 2:
**Runtime**: ``64ms``   
**Memory**: ``40MB``   
```
var numJewelsInStones = function(jewels, stones) {
  let result=0;
  for(let i=0; i<stones.length; i++){
    jewels.includes(stones.charAt(i))?result+=1:null;
  };
  return result;
};
```
