// Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.


const range = (start, end, step) =>{
  
  let array = []
  if (end < start || step <= 0){return []
  } else { 
    for(let i = start; i <= end; i += step){
    array.push(i)
     
   } return(array)}
  
 }

console.log(range(0, 10, 2));