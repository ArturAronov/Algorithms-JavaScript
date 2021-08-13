## DNA Pairing

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)    
**Difficulty**: Intermediate  
**Brief**:     
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.   
Base pairs are a pair of AT and CG. Match the missing element to the provided character.   
Return the provided character as the first element in each array.   
For example, for the input ``GCG``, return ``[["G", "C"], ["C","G"], ["G", "C"]]``   
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.   


### Example 1:
**Input**: ``CTCTA``   
**Output**: ``[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]``   



### Solution 1:
**Runtime**: ``N/A``   
**Memory**: ``N/A``
```
function pairElement(str) {
  const firstBase='ATCGATTGAGCTCTAGCG';
  const secondBase='TAGCTAACTCGAGATCGC';

  let result=[];

  for (let i=0; i<str.length; i++){
    result.push([str[i], secondBase[firstBase.indexOf(str[i])]]);
  };

  return result;
};
```
