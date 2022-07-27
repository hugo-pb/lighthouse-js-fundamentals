// // Our function will receive two arguments:

// // The first argument, trash, is a string that will tell our function what type of item is being submitted.
// // The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.

// For example, say we called the function with the following arguments.

// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
// The smartGarbage function should return the object:

// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  bins[trash] += 1
  console.log(bins)
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

