## Diff Two Arrays 

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)    
**Difficulty**: Intermediate  
**Brief**: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.       

### Example 1:
Input:   
``["andesite", "grass", "dirt", "pink wool", "dead shrub"],  
 ["diorite", "andesite", "grass", "dirt", "dead shrub"]``   
Output: ``["diorite", "pink wool"]``



### Solution 1:
#### Runtime: ``N/A``
####  Memory: ``N/A``
```
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
```
**Notes**: For this algorithm, I've tried to stay as close to functional paradigm as possible. The idea is to combine two arrays into one big array, then eliminate all dublicates using ``[...new Set(array)]``, the unique values are stored in variable ``uniques``. Now that I have unique elements from both of the arrays in one place, I declared two new variables corresponding ``arr1`` and ``arr2``, in which I used filter function in each of those arrays that validates if an element in ``uniques`` in not represented in the given array. If there's an element in ``uniques`` that's not part of the array that is iterated over, then that same element gets saved into the variable. As for the final step, the result is returned by concatting two of the final arrays.   

**Step1**: declare new variable ``oneArray`` that combines all of the values from both arrays  
**Step2**: delcare new variable ``uniques`` that eliminates any dublicates from the ``oneArray`` by using ``[... new Set(oneArray)]``, and stores only the unique values  
**Step3**: declare new variable ``arr1Uniques`` that, by using filter function, validates if ``uniques`` array has an element that is not represented in ``arr1``. If true, that value will be stored in ``arr1Uniques``    
**Step4**: declare new variable ``arr2Uniques`` that, by using filter function, validates if ``uniques`` array has an element that is not represented in ``arr2`` If true, that value will be stored in ``arr2Uniques``   
**Step5**: return the result by combining ``arr1Uniques`` together with ``arr2Uniques`` using the concat function  
