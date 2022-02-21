## Title

**Source**: [leedCode](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)  
**Difficulty**: Easy   
**Brief**:    
Given ``head`` which is a reference node to a singly-linked list. The value of each node in the linked list is either ``0`` or ``1``. The linked list holds the binary representation of a number.   
Return the *decimal value* of the number in the linked list.

### Example:
**Input**: ``101``   
**Output**: ``5``   



### Solution:
**Runtime**: ``72ms``   
**Memory**: ``38.8MB``   
```
var getDecimalValue = function(head) {
  let bin='';
  
  while(head){
    bin+=head.val;
    head=head.next;
  };
  
  return parseInt(bin, 2);
};
```
