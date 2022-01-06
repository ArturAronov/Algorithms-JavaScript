## 21. Merge Two Sorted Lists

**Source**: [leetCode](https://leetcode.com/problems/merge-two-sorted-lists/)    
**Difficulty**: Easy   
**Brief**:     
You are given the heads of two sorted linked lists ``list1`` and ``list2``.   
Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.   
Return the *head of the merged linked list*.

### Example:
**Input**: ``list1 = [1,2,4], list2 = [1,3,4]``
**Output**: ``[1,1,2,3,4,4]``



### Solution:
**Runtime**: ``135ms``   
**Memory**: ``40MB``   
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  //create dummy head
  const head=new ListNode(null);
  
  //create a new list that keep track of the current node, starting with the dummy head
  let list3=head;

  while(list1&&list2){
    if(list1.val<list2.val){
      list3.next=list1;
      
      //this will move linked list forward to the next node
      list1=list1.next;
    }else{
      list3.next=list2;
      
      //this will move linked list forward to the next node
      list2=list2.next;
    };

    list3=list3.next;
  };
  
  //this will add any leftover node(s) into list3  
  list3.next=list1||list2;

  //without the .next, the returned result will have the trailing 0 in the beginning
  return head.next;
};
```
**Notes**:  

**Step1**: 
**Step2**: 
**Step3**: 

