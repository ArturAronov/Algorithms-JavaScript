function pairElement(str) {
  const firstBase='ATCGATTGAGCTCTAGCG';
  const secondBase='TAGCTAACTCGAGATCGC';

  let result=[];

  for (let i=0; i<str.length; i++){
    result.push([str[i], secondBase[firstBase.indexOf(str[i])]]);
  };

  return result;
};

pairElement("CTCTA");
//Returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
