## Missing Letters

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)  
**Difficulty**: Intermediate  
**Brief**: Find the missing letter in the passed letter range and return it. If all letters are present in the range, return ```undefined```.

### Example 1:
Input: ``fearNotLetter("abce")``  
Output: ``d``


### Example 2:
Input: ``fearNotLetter("abcdefghijklmnopqrstuvwxyz")``  
Output: ``undefined``


### My Solution 1:
#### Runtime: ``N/A``  
#### Memory: ``N/A``
```
function fearNotLetter(str) {
  const alphabet="abcdefghijklmnopqrstuvwxyz";
  const startIndex=alphabet.indexOf(str[0]);
  const shortAlphabet=alphabet.split('').splice(startIndex, str.length+1);

  if (str===alphabet) {
    return undefined;
  } else {
    for(let i=0; i<str.length; i++) {
      if(shortAlphabet[i]!==str[i]) {
        return shortAlphabet[i];
      };
    };
  };
};
```
**Step1**: declare variable ``alphabet`` that holds all of the letter of alphabet  
**Step2**: declare variable ``startIndex`` that holds starting index of ``str`` in relations with ``alphabet``  
**Step3**: declare variable ``shortAlphabet`` that cuts down the size of the alphabet starting from ``startIndex`` and has the length of ``str``  
**Step4**: if ``str`` is identical to ``alphabet``, return ``undefined``
**Step5**: if ``str`` is not identical to ``alphabet``, initiate for-loop that compares indexes of ``str`` and ``shortAlphabet``. Once the missing letter is found, it gets returned and loop breaks.

### My Solution 2:
#### Runtime: ``N/A``  
#### Memory: ``N/A`` 
#### Note:   
Since this solution does not use ``array.split('')`` and ``array.splice()`` by taking the full advantage of array start and stop positions that are correlated between ``str`` and ``alphabet``, this algorithms should, in theory, have better run-time and memory usage.    
```
function fearNotLetter(str) {
  const alphabet="abcdefghijklmnopqrstuvwxyz";
  const startIndex=alphabet.indexOf(str[0]);

  if (str===alphabet) {
    return undefined;
  } else {
    for(let i=startIndex; i<str.length+startIndex; i++) {
      if(str[i-startIndex]!==alphabet[i]) return alphabet[i];
    };
  };
};
```
**Step1**: declare variable ``alphabet`` that holds all of the letter of alphabet  
**Step2**: declare variable ``startIndex`` that holds starting index of ``str`` in relations with ``alphabet``  
**Step3**: if ``str`` is identical to ``alphabet``, return ``undefined``  
**Step4**: if ``str`` is not identical to ``alphabet``, initiate for-loop that starts at the with the first letter of ``str`` and ends at the length of ``str`` + the starting position in relations with ``alphabet``   
**Step5**: if ``str`` at the index of ``i`` correlated with ``startIndex`` does not match ``alphabet ``, return the letter in ``alphabet`` in the given index














