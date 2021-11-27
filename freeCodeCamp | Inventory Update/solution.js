function updateInventory(arr1, arr2) {
  if(!arr1.length){
    return arr2.sort((a,b)=>a[1]>b[1]);
  }else if(!arr2.length){
    return arr1.sort((a,b)=>a[1]>b[1]);
  };

  let remainders=[];
  
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr1.length; j++){
      if(arr1[j][1]===arr2[i][1]){
        arr1[j][0]+=arr2[i][0];
        i++;
      };
    };
    remainders.push(arr2[i]);
  };

  remainders.length>0?arr1.push(...remainders):null;
  return arr1.sort((a,b)=>a[1]>b[1]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

