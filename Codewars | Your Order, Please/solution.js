function order(words){
  const arr=words.split(' ');
  const result=new Array(arr.length).fill(0);
  
  for(let i=0; i<arr.length; i++){
    const num=Number(arr[i].match(/\d+/))-1;
    result.splice(num,1,arr[i]);
  };
  return result.join(' ');
};
