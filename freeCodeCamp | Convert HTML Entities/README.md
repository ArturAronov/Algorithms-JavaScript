## Convert HTML Entities

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities)  
**Difficulty**: 
**Brief**:     

### Example 1:
Input: ''
Output: ''



### Solution 1:
#### Runtime: ''
####  Memory: ''
```
function convertHTML(str) {
  return str.split('').map(element=>{
    if(element==='&'){
      return '&amp;'
    }else if(element==='<'){
      return '&lt;'
    }else if(element==='>'){
      return '&gt;'
    }else if(element==='"'){
      return "&quot;"
    }else if(element==='\''){
      return '&apos;'
    }else{
      return element
    }
  }).join('');
};

convertHTML("Schindler's List");
//Returns Schindler&apos;s List
```
**Notes**:  

**Step1**: 
**Step2**: 
**Step3**: 

