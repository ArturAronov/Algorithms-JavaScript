var numJewelsInStones = function(jewels, stones) {
  let result=0;
  for(let i=0; i<stones.length; i++){
    jewels.includes(stones.charAt(i))?result+=1:null;
  };
  return result;
};
