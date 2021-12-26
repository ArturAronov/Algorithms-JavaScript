## Caesars Cipher

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)     
**Difficulty**: Intermediate
**Brief**:     
One of the simplest and most widely known *ciphers* is a *Caesar cipher*, also known as a *shift cipher*. In a shift cipher the meanings of the letters are shifted by some set amount.   
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus ``A ↔ N``, ``B ↔ O`` and so on.  
Write a function which takes a ROT13 encoded string as input and returns a decoded string.   
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.   

### Example 1:
**Input**: ``SERR CVMMN!``   
**Output**: ``FREE PIZZA!``   



### Solution 1:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function rot13(str) {
  const alphabet='abcdefghijklmnopqrstuvwxyz';
  let arr=str.split('');
  let result=[];
  for (let i=0; i<arr.length; i++) {
    const strLower=arr[i].toLowerCase();
    const num=alphabet.split('').indexOf(strLower);
    if(!alphabet.split('').includes(strLower)) {
      result.push(str[i])
    } else if (num>=13) {
      result.push(alphabet[num-13])
    } else if (num<13) {
      result.push(alphabet[num+13])
    };
  };

  return result.join('').toUpperCase();
};
```
**Notes**:   
First solution is something that didn't require much of extra digging. However it has lots of issues, it's convoluted and takes up lots of memory. It starts with declaring a variable of a string with all of the letters from a to z. Second variable is an empty array that will store the characters that have been compared against the first variable by finding its index in there. Then according to its position, the index get added or subtracted by 13. Then that number is taken and converted back in the letter from the first variable. This letter is getting pushed into the empty array and the whole array is then joined back into string and returned. All of that is happening with the use of multiple Array.split('') and Array.join('') methods combined with the use of Array.includes(), Array.indexOf(), String.toLowerCase(), String.toUpperCase() and Array.push(). This solution uses 5 new variables and grand total of 7 different methods. It does the job, however in a very clumsy and wasteful manner.  


### Solution 2:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function rot13(str) {
  return str.split('').map(element=>{
    const ascii=element.charCodeAt(0);
    if(ascii<65||ascii>90){
      return String.fromCharCode(ascii)
    } else if (ascii<78) {
      return String.fromCharCode(ascii+13)
    } else if (ascii>=78) {
      return String.fromCharCode(ascii-13)
    };
  }).join('');
};
```

**Notes**:   
Second solution took several hours to finish. Since letters and numbers have very similar binary numbers, I thought I could use and convert the binaries to find the solution to the problem. For example 'a' is 1000001 meanwhile 1 (index of letter a) is 00001, the 'z' is 1011010 meanwhile 26 (index of letter z) is 11010. As you might notice, by adding 10 in front of letter binary we get a number corresponding the letter's index in the alphabet. Then from there on I could add or subtract 13 and convert it back into new letter. Issue with this solution is that it also requires lots of steps to come to the solution. First the string needs to be split into array, then each letter to be converted into binary with Number.toString(2), then to that 10 gets added in front, then converted into number with parseInt(binary, 2), then 13 get added or subtracted, then turned back into binary, split into array to remove the 10 from beginning with Array.slice() and converted back into string. Lots of steps again. However! While I was researching best solution with the given binary method, I found out that there's something called ASCII number. All of the capital letters in ASCII fall into the range of numbers between 65-90. By using String.charCodeAt(0) method, the string gets converted into ASCII representing number. From there I created logic that checks if the character falls out of 65-90 range, in which it will remain untouched. If number falls into 65-90, then depending whether it's A-M (in which 13 gets added to ASCII nr) or N-Z (in which 13 get subtracted from ASCII nr), then the ASCII number get converted by to string with String.fromCharCode() method.
