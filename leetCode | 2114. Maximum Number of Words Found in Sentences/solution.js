var mostWordsFound = function(sentences) {
  let result=0;
  for(let i=0; i<sentences.length; i++){
    let sentenceLength=sentences[i].split(' ').length;
    sentenceLength>result?result=sentenceLength:null;
  };
  return result;
};
