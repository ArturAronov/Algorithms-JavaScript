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
- The key takeaways from this challenge is that algorightm is given two 2d arrays (``arr1`` and ``arr2``), each array has a subarray with two values - a product quantity (as a string) and and name of the product (as a string)   
- Should both arrays contain same product, the quantity of the product from ``arr2`` gets added to ``arr1`` gets added together     
- If product is listed in ``arr2`` and absent in ``arr1``, then the quantity and product gets added into ``arr1``     
- If one of arrays is empty, the second array gets returned     
- The returned array should be listed in the alphabetical order    

**Step1**: First lines check if either of the arrays is empty, in which case, the non-empty array gets returned in the alphabetical order    
**Step2**: Shoult both of the arrays be filled, the algorithm will iterate over both arrays to find matching values   
**Step3**: For the first step, an empty array ``remainder`` gets created, that stores all of the subarrays that are not present in the ``arr1``   
**Step4**: Next step is to create two layered nested loop. First loop will iterate over array in general, and the second (nested) loop interates over nested array   
**Step5**: Within the nested loop, the if statement checks if ``arr1`` and ``arr2`` have matching product values. Shoult that rturn ``true``, then the quantity of product in ``arr1`` gets added from ``arr2`` and the first array gets pushed forward by 1 ``i++``   
**Step6**: Should there be no element in ``arr1`` that exists in ``arr2``, that element gets added to ``remainders`` with ``remainders.push(arr2[i])``   
**Step7**: Once the both loops are done iterating, for the next step an ternary operator checks if ``remainder`` is has any elements inside. Should that result to ``true``, then all of those elements get unpacked with the spread operator ``...`` and pushed into ``arr1``    
**Step8**: For the last step, ``arr1`` gets returned in alphabetical order with ``arr1.sort((a,b)=>a[1]>b[1])``    
