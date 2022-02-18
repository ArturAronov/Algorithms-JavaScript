var containsDuplicate = function(nums) {
  const uniques=[...new Set(nums)];
  return nums.length!==uniques.length;
};
