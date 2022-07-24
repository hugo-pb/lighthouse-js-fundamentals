// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

const lastIndexOf = (array, n) => {
  let finalidex = '';
for(let i = array.length; i > -1; i--){
  if(array[i] == n){ 
  
  finalidex = i;
  break;
}
  else {finalidex = -1 ;}
}return(finalidex)
}


lastIndexOf([1,2,3,4,4], 4)
