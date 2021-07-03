function diffArray(arr1, arr2) {
  const oneArray=arr1.concat(arr2);
  const uniques=[...new Set(oneArray)];
  const arr1Uniques=uniques.filter(element=>{
    if(!arr1.includes(element)){
      return element;
    };
  });

  const arr2Uniques=uniques.filter(element=>{
    if(!arr2.includes(element)){
      return element;
    };
  });
  
  return arr1Uniques.concat(arr2Uniques);
};

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
//Returns ['diorite', 'pink wool']
