## Inventory Update

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update)  
**Difficulty**: ``N/A``    
**Brief**:     
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in ``arr1``). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.   

### Example 1:
**Input**:   
```
[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],   
[[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
```
**Output**: 
```
[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
```

### Example 2:
**Input**:
```
[],    
[[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
```
**Output**:
```
[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
```

### Example 3:
**Input**:
```
[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],   
[]
```
**Output**:
```
[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
```



### Solution 1:
**Runtime**: ``N/A``   
**Memory**: ``N/A``    
```
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
```
**Notes**:  

**Step1**: 
**Step2**: 
**Step3**: 

