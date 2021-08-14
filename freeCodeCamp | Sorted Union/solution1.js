function uniteUnique(arr) {
  let completeArr=[];
  for(let i in arguments){
    completeArr.push(arguments[i])
  };

  //Since uniteUnique function only passes one argument, yet the test-case has multiple parameters, I need to find all of the values by using arguments objects.
  
  const newArr=completeArr.reduce((a,b)=>a+b)
  //This function will unite all of the arrays into a string.

  const result=[...new Set(newArr)].map(element=>{
    if(!isNaN(parseFloat(element))){
      return Number(element)
      //This will convert each string element into a number.
    }
  }).filter(element=>{
    return element===Number(element)
    //This verifies if element is a number in which case it gets returned.
  });

  return result;
};

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
//Returns [1, 2, 3, 5, 4, 6, 7, 8];
