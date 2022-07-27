// For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

// If we called the function with the following arguments.

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 41,
    plumpness: 3
  }
]

const metric = 'redness'


const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
let winner = '';
let largest= '';

for(let i = 0; i < vegetables.length; i++){

  if(vegetables[i][metric] > largest){
winner = vegetables[i].submitter;
largest = vegetables[i][metric]
}
} return winner
}

console.log(judgeVegetable(vegetables, metric))