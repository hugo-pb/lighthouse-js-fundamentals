let merge = (arr, arr2) => {
  //merge array
  let na =[];
  for(let i = 0; i < arr.length; i++){
    na.push(arr[i])
  }
  for(let i = 0; i < arr2.length; i++){
    na.push(arr2[i])
  }
  //sort array
 return na.sort()
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);