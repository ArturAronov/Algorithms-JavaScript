var defangIPaddr = function(address) {
  return address.split('').map(element=>element==='.'?'[.]':element).join('');
};
