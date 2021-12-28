## Palindrome Checker

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)   
**Difficulty**: Intermediate   
**Brief**:     
Return ``true`` if the given string is a palindrome. Otherwise, return ``false``.   
A *palindrome* is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.    
**Note:** You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.   
We'll pass strings with varying formats, such as ``racecar``, ``RaceCar``, and ``race CAR`` among others.   
We'll also pass strings with special symbols, such as ``2A3*3a2``, ``2A3 3a2``, and ``2_A3*3#A2``.

### Solution:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function palindrome(str) {
  const regex=new RegExp('[a-zA-Z0-9]');
  let newString=String();
  for (let i=0; i<str.length; i++) {
    if(regex.test(str[i])) newString+=str[i].toLowerCase();
  };

  let i=0;
  while(i<newString.length/2) {
    if(newString[i]===newString[newString.length-1-i]){
      i++
    } else {
      return false;
    };
  };
  return true;
};
```
