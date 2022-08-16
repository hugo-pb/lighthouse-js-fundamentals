const makeCase = function (input, c) {
  // Put your solution here
  let n = "";
  switch (c) {
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "";
        } else if (input[i - 1] === " ") {
          n += input[i].toUpperCase();
        } else {
          n += input[i];
        }
      }
      break;
    case "pascal":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "";
        } else if (input[i - 1] === " ") {
          n += input[i].toUpperCase();
        } else if (i === 0) {
          n += input[i].toUpperCase();
        } else {
          n += input[i];
        }
      }
      break;
    case "snake":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "_";
        } else {
          n += input[i];
        }
      }
  }
  return n;
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));
