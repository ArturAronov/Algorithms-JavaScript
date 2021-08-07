i## Pig Latin

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)  
**Difficulty**: Intermediate  
**Brief**: Pig Latin is a way of altering English Words. The rules are as follows:   
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ``ay`` to it.  
- If a word begins with a vowel, just add ``way`` at the end.    


### Example 1:
Input: ``schwartz``   
Output: ``artzschway``



### Solution 1:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function translatePigLatin(str) {
  const constants=['b','c','d','f','g','j','k','l','m','n','p','q','s','t','v','x','z','h','r','w','y'];
  let strArr=str.split('');
  let i=0;


  while(constants.includes(strArr[0])&&i<str.length){
    strArr.push(strArr[0]);
    strArr.shift();
    i++;
  };

  if(constants.includes(str[0])){
    return strArr.join('')+'ay'
  }else{
    return strArr.join('')+'way'
  };
};
```
**Step1**: declare new variable ``constants`` that stores all of the 21 constants   
**Step2**: declare new variable ``strArr`` that stores array version of ``str`` by using ``Array.split('')``  
**Step3**: declare new variable ``i`` with initial value of 0. This will get incremented on each iteration of the while loop  
**Step4**: create a while loop that runs when both of the contitions are met:  
1) The first letter of ``strArr`` is a constant and      
2) ``i`` is smaller than ``str`` length  
**Step5**: should both of these contidion equate to ``true``, then the first letter of strArr gets added into the back of the array (``Array.push()``), and that very same verst letter gets deleted from beginning of the array (``Array.shift()``)  
**Step6**: For the final step, the if/else statement verifies if the ``str`` starts with constant or vowel. If the first letter of ``str`` is vowel, the ``strArr`` gets made into a string with (``Array.join('')`` and the `` 'way' `` gets added at the end of the string. Should the first letter of the ``str`` be constant, the strArr gets turned into a string and `` 'ay' `` gets added at the end of the string.  
 

