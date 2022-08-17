let prompt = require("prompt-sync")();
let tries = 0;
let number = Math.floor(Math.random() * 100);

function letsPlay() {
  let answer = prompt("Guess a number: ");
  if (answer > number) {
    console.log("You answered: " + answer + " was wrong but try lower!");
    tries += 1;
    letsPlay();
  } else if (answer < number) {
    console.log("You answered: " + answer + " was wrong but try higher!");
    tries += 1;
    letsPlay();
  } else {
    console.log(
      "you got it! it only took you " +
        tries +
        " tries. Im sure you can do better."
    );
  }
}
letsPlay();
