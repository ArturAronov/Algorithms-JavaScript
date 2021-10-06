var maximumWealth = function(accounts) {
    return accounts.map(element=>{
        return element.reduce((a, b)=>a+b)
    }).sort((a,b)=>a-b)[accounts.length-1];
};
