// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

const lastIndexOf = (array, n) => {
for(let i = 0; i < array.length; i++){
  if(array[i] == n){    console.log('found')}
  else{console.log('not found')}

   
 
}
}

lastIndexOf([1,2,3,4,4], 4)