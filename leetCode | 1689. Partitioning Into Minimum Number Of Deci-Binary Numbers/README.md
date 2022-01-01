## 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

**Source**: [leetCode](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/)  
**Difficulty**: Medium   
**Brief**:     
A decimal number is called **deci-binary** if each of its digits is either ``0`` or ``1`` without any leading zeros. For example, ``101`` and ``1100`` are **deci-binary**, while ``112`` and ``3001`` are not.

Given a string ``n`` that represents a positive decimal integer, return *the* ***minimum*** *number of positive* ***deci-binary*** *numbers needed so that they sum up to* ``n``.

### Example:
**Input**: ``n = "82734"``   
**Output**: ``8``   
**Explanation**:   
827340 - 111110 -> 716230   
716230 - 111110 -> 605120   
605120 - 101110 -> 504010   
504010 - 101010 -> 403000   
403000 - 101000 -> 302000   
302000 - 101000 -> 201000   
201000 - 101000 -> 100000   
100000 - 100000 -> 000000   


### Solution:
**Runtime**: ``88 ms``   
**Memory**: ``43.6 MB``   
```
var minPartitions = function(n) {
  let result=0;
  
  for(let i=0; i<n.length; i++){
    Number(n[i])>result?result=Number(n[i]):null;
  };
  
  return result;
};
```
**Notes**:  

**Step1**: 
**Step2**: 
**Step3**: 

