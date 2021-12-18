function dropElements(arr, func) {
  if(func(arr[0])){
    return arr;
  }else if(!arr.length){
    return arr;
  }else{
    return dropElements(arr.splice(1, arr.length), func);
  };
};
