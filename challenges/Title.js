const titleCase = str => {
  if (!str.length) {
    return "";
  }
  newstr = str.toLowerCase().spit(" ");
  for (let i = 0; i < newstr.length; i++) {
    newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
  }
  return newstr.join(" ");
  // let newstr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (i === 0) {
  //     newstr = str[i].toUpperCase();
  //     continue;
  //   }
  //   if (str[i - 1] === " ") {
  //     newstr += str[i].toUpperCase();
  //     continue;
  //   }
  //   newstr += str[i].toLowerCase();
  // }
  // return newstr;
};

titleCase("this is an example"); // should return "This Is An Example"
titleCase("test"); //should return "Test"
titleCase("i r cool"); //should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); //should return "What Happens Here"
titleCase(""); //should return ""
titleCase("A"); //should return "A"
