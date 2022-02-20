/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */



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
