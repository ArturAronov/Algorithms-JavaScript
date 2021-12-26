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
