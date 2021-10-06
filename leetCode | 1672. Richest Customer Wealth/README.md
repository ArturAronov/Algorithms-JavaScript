## 1672. Richest Customer Wealth

**Source**: [leedCode](https://leetcode.com/problems/richest-customer-wealth/)    
**Difficulty**: Easy   
**Brief**:     
You are given an ``m`` ``x`` ``n`` integer grid ``accounts`` where ``accounts[i][j]`` is the amount of money the ``i`` customer has in the ``j`` bank. Return the wealth that the richest customer has.   
   
A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.   

### Example:   
**Input**: ``accounts = [[1,5],[7,3],[3,5]]``    
**Output**: ``10``   
**Explanation**:    
1st customer has wealth = 6   
2nd customer has wealth = 10    
3rd customer has wealth = 8    
The 2nd customer is the richest with a wealth of 10.   



### Solution 1:
**Runtime**: ``89ms``   
**Memory**: ``38.4BB``    
```
var maximumWealth = function(accounts) {
    return accounts.map(element=>{
        return element.reduce((a, b)=>a+b)
    }).sort((a,b)=>a-b)[accounts.length-1];
};
```


### Solution 2:   
**Runtime**: ``76ms``   
**Memory**: ``39MB``   
```
var maximumWealth = function(accounts) {
    let maxWealth=0;
    for(let i=0; i<accounts.length; i++){
        const currentWealth=accounts[i].reduce((a,b)=>a+b);
        currentWealth>maxWealth?maxWealth=currentWealth:0;
    };
    return maxWealth;
};
```
