var minOperations = function(boxes) {
  let result=[];
  for(let i=0; i<boxes.length; i++){
    let steps=0;
    for(let j=0; j<boxes.length; j++){
      if(boxes[j]==='1'){
        steps+=Math.abs(i-j);
      };
    };
    result.push(steps);
  };
  return result;
};
