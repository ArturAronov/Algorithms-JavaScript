var minPartitions = function(n) {
  let result=0;
  
  for(let i=0; i<n.length; i++){
    Number(n[i])>result?result=Number(n[i]):null;
  };
  
  return result;
};
