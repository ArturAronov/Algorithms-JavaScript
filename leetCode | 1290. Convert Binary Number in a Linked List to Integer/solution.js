var getDecimalValue = function(head) {
  let bin='';
  
  while(head){
    bin+=head.val;
    head=head.next;
  };
  
  return parseInt(bin, 2);
};
