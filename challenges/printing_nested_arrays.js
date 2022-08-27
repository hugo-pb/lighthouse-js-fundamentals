const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      printItems(item);
      continue;
    }
    console.log(item);
  }
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
