## Spinal Tap Case

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)   
**Difficulty**: Intermediate   
**Brief**: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.      

### Example 1:
**Input**: ``Your_Put-Options ExpireWorthless``  
**Output**: ``your-put-options-expire-worthless``  


### Solution 1:
**Runtime**: ``N/A``   
**Memory**: ``N/A``     
```
function spinalCase(str) {
  const lower=/[a-z]/;
  const capital=/[A-Z]/;
  
  return str.split('').map((element, index)=>{
    if(capital.test(element)&&lower.test(str[index-1])&&index!==0){
      return '-'+element
    }else if(!lower.test(element)&&!capital.test(element)){
      return '-'
    }else{
      return element
    }
  }).join('').toLowerCase();
};
```
**Notes**: I solved this algorithm by splitting ``str`` into an array of individual letters, and iterated over each letter using the map function. Within the map function, each element gets inspected if the element is in lower- or uppercase. This is achieved by declaring two variables ``lower`` and ``capital``, each of these varibales store RegEx of either only lower case letters or only capital case letters. If the element in capital case and element before that is in lower case (such as aB), then the ``-`` gets injected between both elements (making it a-B). Otherwise, if element doesn't match ``lower`` or ``capital`` test, then it means it is a special character (such as -,_,&, white space etc) and the special character gets converted into the ``-``. If none of the two conditions mentioned above are satisfied, then that means that element is a standard letter (be in upper or lowercase), and the element gets returned as it is. Once map function has done iterating, the array gets converted back into string with ``Array.join('')`` and all of the letters are converted into the lowercase with ``String.toLowerCase()``.  

**Step1**: declare variable ``lower`` that store value of regex for lower case letters only  
**Step2**: declare variable ``capital`` that stores value of regex for capital case letters only  
**Step3**: return ``str`` that:  
**Step3.1**: gets converted into array and split into individual letters  
**Step3.2**: the array gets iterated with map function that take two parameters: ``element`` and ``index``  
**Step3.3**: if the element is a capital letter and element before that in a lower case letter (aB), otherwise know as a camelCase), then ``-`` get's injected in between them to make it a spinal-tap-case (a-B)  
**Step3.4**: if the element is not lower case letter, nor upper case letter, that leaves us with ``element`` being a special character (such as -,_,$, whitespace, etc). This special character gets converted into ``-``  
**Step3.5**: if the element doesn't satisfy none of the two statements above, it leave us with only possibility that element is a regular letter (regardless wether of upper or lower case). The ``else`` statement just returns the letter as it is.  
**Step4**: the array get's converted back into string once the map has finished iterating  
**Step5**: the string value gets converted to lower case with ``String.toLowerCase()``
