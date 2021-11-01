## Search and Replace

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace)  
**Difficulty**: Intermediate  
**Brief**:     
Perform a search and replace on the sentence using the arguments provided and return the new sentence. 

First argument is the sentence to perform the search and replace on.  

Second argument is the word that you will be replacing (before).  

Third argument is what you will be replacing the second argument with (after).  

*Note*: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word ``Book`` with the word ``dog``, it should be replaced as ``Dog``

### Example 1:
Input: ``"I think we should look up there", "up", "Down"``  
Output: ``I think we should look down there``  



### Solution 1:  
#### Runtime: ``N/A``  
####  Memory: ``N/A``  
```
function myReplace(str, before, after) {
  return str.split(' ').map(element=>{
    if (element==before){
      if(element[0]===element[0].toUpperCase()){
        return after.charAt(0).toUpperCase()+after.slice(1)
      }else if(element[0]===element[0].toLowerCase()){
        return after.charAt(0).toLowerCase()+after.slice(1)
      }else{
        return after
      }
    }else{
      return element
    }
  }).join(' ');
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//Returns He is Sitting on the couch
```
 

