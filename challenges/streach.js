// const input = [{ x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 }];
// const result = input.map(obj => {
//   return Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
// });

// // x^2 + y^2

// console.log(result[0]);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];
students.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
});

console.log(students);
