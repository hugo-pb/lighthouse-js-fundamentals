const makeCase = function (input, c) {
  // Put your solution here

  let func = {
    camel: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "";
        } else if (input[i - 1] === " ") {
          n += input[i].toUpperCase();
        } else {
          n += input[i];
        }
      }
      return n;
    },
    pascal: function () {
      let n = "";
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
      return n;
    },
    snake: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "_";
        } else {
          n += input[i];
        }
      }
      return n;
    },
    kebab: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          n += "-";
        } else {
          n += input[i];
        }
      }
      return n;
    },
    title: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i - 1] === " ") {
          n += input[i].toUpperCase();
        } else if (i === 0) {
          n += input[i].toUpperCase();
        } else {
          n += input[i];
        }
      }
      return n;
    },
    vowel: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "a" ||
          input[i] === "e" ||
          input[i] === "o" ||
          input[i] === "i" ||
          input[i] === "u"
        ) {
          n += input[i].toUpperCase();
        } else {
          n += input[i];
        }
      }
      return n;
    },
    consonant: function () {
      let n = "";
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "a" ||
          input[i] === "e" ||
          input[i] === "o" ||
          input[i] === "i" ||
          input[i] === "u"
        ) {
          n += input[i];
        } else {
          n += input[i].toUpperCase();
        }
      }
      return n;
    },
    upper: function (s) {
      if (s) {
        return s.toUpperCase();
      } else {
        return input.toUpperCase();
      }
    },
  };
  if (typeof c === "string") {
    return func[c]();
  } else {
    return func[c[0]](func[c[1]]());
  }
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
