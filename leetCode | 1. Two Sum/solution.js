var twoSum = function(nums, target) {
  const result=[];
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if(i===j){
        j++;
      }else if(nums[i]+nums[j]===target){
        result.push(i,j);
      };
    };
  };
  return result;
};
