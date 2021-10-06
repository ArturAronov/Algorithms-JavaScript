var maximumWealth = function(accounts) {
    let maxWealth=0;
    for(let i=0; i<accounts.length; i++){
        const currentWealth=accounts[i].reduce((a,b)=>a+b);
        currentWealth>maxWealth?maxWealth=currentWealth:0;
    };
    return maxWealth;
};
