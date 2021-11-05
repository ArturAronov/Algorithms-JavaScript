function convertHTML(str) {
  return str.split('').map(element=>{
    if(element==='&'){
      return '&amp;'
    }else if(element==='<'){
      return '&lt;'
    }else if(element==='>'){
      return '&gt;'
    }else if(element==='"'){
      return "&quot;"
    }else if(element==='\''){
      return '&apos;'
    }else{
      return element
    }
  }).join('');
};

convertHTML("Schindler's List");
//Returns Schindler&apos;s List

