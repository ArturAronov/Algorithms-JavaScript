## 1108. Defanging an IP Address

**Source**: [leetCode](https://leetcode.com/problems/defanging-an-ip-address/)  
**Difficulty**: Easy   
**Brief**:     
Given a valid (IPv4) IP ``address``, return a defanged version of that IP address.   
A *defanged IP address* replaces every period "." with "[.]"   

### Example 1:
**Input**: ``address = "1.1.1.1"``   
**Output**: ``"1[.]1[.]1[.]1"``   


### Solution 1:
**Runtime**: ``68ms``   
**Memory**: ``38.8MB``   
```
var defangIPaddr = function(address) {
  return address.split('').map(element=>element==='.'?'[.]':element).join('');
};
```
