function destroyer(arr) {
  let seeker=[];

  for(let i=1; i<arguments.length; i++) {
    seeker.push(arguments[i])
  };

  return arr.filter(element=>{
    if(!seeker.includes(element)){
      return element
    }
  });
};

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
//Returns: [12,92,65]
