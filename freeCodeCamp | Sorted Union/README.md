## Sorted Union

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)   
**Difficulty**: Intermediate   
**Brief**:    
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.  

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.  

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.  
  

### Example 1:
**Input**: ``[1, 3, 2], [5, 2, 1, 4], [2, 1]``  
**Output**: ``[1, 3, 2, 5, 4]``  



### Solution 1:  
**Runtime**: ``N/A``  
**Memory**: ``N/A``  
```
function uniteUnique(arr) {
  let completeArr=[];
  for(let i in arguments){
    completeArr.push(arguments[i])
  };

  //Since uniteUnique function only passes one argument, yet the test-case has multiple parameters, I need to find all of the values by using arguments objects.
  
  const newArr=completeArr.reduce((a,b)=>a+b)
  //This function will unite all of the arrays into a string.

  const result=[...new Set(newArr)].map(element=>{
    if(!isNaN(parseFloat(element))){
      return Number(element)
      //This will convert each string element into a number.
    }
  }).filter(element=>{
    return element===Number(element)
    //This verifies if element is a number in which case it gets returned.
  });

  return result;
};
```


**Notes**:  
A relatively straight forward problem, however there's couple of caveats that made it a nod more complicated that it could have been. First of all the function ``uniteUnique`` only takes one parameter, however the is no limit on how many parameters get passed when the function gets invoked. For that, I used for let in arguments loop to retrieve all of the parameters by pushing them into ``completeArr`` variable. Since this creates a nested array, I used a ``reduce`` function to reduce into one array. For the last step I declared ``result`` variable that cleans up the data by removing the dublicates with ``[...new Set(newArr)]`` that in return converts the string types into numbers and filters out any values that are not number types.   

**Step1**: Craete variable ``completeArr`` that stores empty array   
**Step2**: Since the function takes only one argument but gets passed more than one argumnets, I used ``for(let i in arguments)`` loop to retrieve rest of the arguments and push them into ``completeArr``   
**Step3**: As the ``completeArr`` is a nested array now, I used the ``reduce`` function to add it all together into one string   
**Step4**: Created new variable ``result`` that stores unique values of ``newArr`` by using ``[...new Set(newArr)]``. Since this will also include a comma I need to:   
**Step4.1**: Convert number in the string into a number type with the ``map`` function  
**Step4.2**: Remove all of the values in the Set that are not number types (sucha as comma) with the ``filter`` function
