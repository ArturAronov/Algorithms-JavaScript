function uniteUnique(arr) {
  let completeArr=[];
  for(let i in arguments){
    completeArr.push(arguments[i])
  };

  //since uniteUnique function only passes one argument, yet the test-case has multiple parameters, I need to find all of the values by using arguments objects

  const newArr=completeArr.reduce((a,b)=>a+b);
  //this function will unite all of the arrays into one big one.

  const result=[...new Set(newArr)].map(element=>{
    console.log(element)
    if(!isNaN(parseFloat(element))){
      return Number(element)
    }
  }).filter(element=>{
    return element!==undefined
  });

  return result;
};

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
//Returns [1, 2, 3, 5, 4, 6, 7, 8];
