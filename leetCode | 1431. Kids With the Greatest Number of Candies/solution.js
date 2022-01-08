var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies=Math.max(...candies);
  
  return candies.map(element=>(element+extraCandies)>=maxCandies);
};
