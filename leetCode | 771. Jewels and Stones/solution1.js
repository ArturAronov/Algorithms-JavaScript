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
