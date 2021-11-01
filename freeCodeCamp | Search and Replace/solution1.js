function myReplace(str, before, after) {
  return str.split(' ').map(element=>{
    if (element==before){
      if(element[0]===element[0].toUpperCase()){
        return after.charAt(0).toUpperCase()+after.slice(1)
      }else if(element[0]===element[0].toLowerCase()){
        return after.charAt(0).toLowerCase()+after.slice(1)
      }else{
        return after
      }
    }else{
      return element
    }
  }).join(' ');
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//Returns He is Sitting on the couch
