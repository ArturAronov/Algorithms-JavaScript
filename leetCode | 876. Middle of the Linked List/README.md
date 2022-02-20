## 876. Middle of the Linked List   

**Source**: [leetCode](https://leetcode.com/problems/middle-of-the-linked-list/)  
**Difficulty**: Easy   
**Brief**:     
Given the ``head`` of a singly linked list, return *the middle node of the linked list*.
If there are two middle nodes, return **the second middle** node.   

### Example:
**Input**: ``head = [1,2,3,4,5]``   
**Output**: ``[3,4,5]``   


### Solution:
**Runtime**: ``60ms``   
**Memory**: ``38.2MB``  
```
var middleNode = function(head) {
  let tempHead=head;
  let count=0;
  
  while(tempHead){
    tempHead=tempHead.next;
    count++;
  };
  
  count=parseInt(count/2);
  
  while(count){
    head=head.next;
    count--;  
  };
 
  return head;
};
```
