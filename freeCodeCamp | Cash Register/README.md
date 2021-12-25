## Cash Register

**Source**: [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)    
**Difficulty**: Intermediate   
**Brief**:     
Design a cash register drawer function ``checkCashRegister()`` that accepts purchase price as the first argument (``price``), payment as the second argument (``cash``), and cash-in-drawer (``cid``) as the third argument.   

``cid`` is a 2D array listing available currency.

The ``checkCashRegister()`` function should always return an object with a ``status`` key and a ``change`` key.   

Return ``{status: "INSUFFICIENT FUNDS", change: []}`` if cash-in-drawer is less than the change due, or if you cannot return the exact change.   

Return ``{status: "CLOSED", change: [...]}`` with cash-in-drawer as the value for the key ``change`` if it is equal to the change due.   

Otherwise, return ``{status: "OPEN", change: [...]}``, with the change due in coins and bills, sorted in highest to lowest order, as the value of the ``change`` key.   



### Solution:
**Runtime**: ``N/A``   
**Memory**: ``N/A``   
```
function checkCashRegister(price, cash, cid) {

  const result={
    status: null,
    change: []
  };

  const denominations=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

  let float=Math.floor(cid.reduce((a,b)=>a+b[1],0));
  let change=cash-price;
  let i=cid.length-1;
  
  //This condition checks whether the money in the till is same as change, in which case the result gets returned
  if(cid.reduce((a,b)=>a+b[1],0)===change){
    result.status='CLOSED';
    result.change=cid;

    return result;
  };

  //This loop will remove all of values in cid that are not required.
  while(float>0){
    
    //If the given dollar denomination is smaller or equal to change, then the loop will stop
    if(denominations[i][1]<=change){
      break;
    };

    //Should the given dollar denomination be larger than the change required, then the dollar denomination gets removed fromm the array, float gets recalculated and value i is reduced by 1.
    cid.pop();
    float=Math.floor(cid.reduce((a,b)=>a+b[1],0));
    i--;
  };


  while(change>0){
    if(float<=change){
      //Should the flaot be smaller or equal to change, then there's not enough funds in the till to pay back the change, chich means the loop breaks and status gets returned.
      result.status="INSUFFICIENT_FUNDS";
      break;
    }else if(denominations[i][1]>change||cid[i][1]===0){
      //Should the given dollar denomination be larger than the change value OR given cid dollar value is 0, then the array moves back by one.
      i--;
    }else if(cid[i][1]!==0){
      
      if(result.change.length===0){
        result.change.push([denominations[i][0], denominations[i][1]])
      }else if(result.change[result.change.length-1][0]===denominations[i][0]){
        result.change[result.change.length-1][1]+=denominations[i][1]
      }else{
        result.change.push([denominations[i][0], denominations[i][1]])
      };

      cid[i][1]-=denominations[i][1];
      change=(change-denominations[i][1]).toFixed(2);
    };
    
    result.status='OPEN';
  };
  
  return result;
};

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
```
