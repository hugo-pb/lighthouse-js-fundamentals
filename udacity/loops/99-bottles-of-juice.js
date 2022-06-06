// irections:
// Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

// 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
// 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
// ...
// 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
// 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
// Some Notes:

// Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
// Your text editor may try to autocorrect your ellipses (...) to the ellipses character (…). Do not use the ellipses character for this quiz; use three consecutive periods instead.

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num > 0) {
    // check value of num
    if (num == 1 ){
        console.log( num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!')
    }else if(num == 2) {
        console.log( num + ' bottles of juice on the wall! ' +num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottle of juice on the wall!')
    }
    // print lyrics using num
    else{
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!')
    }
    // don't forget to check pluralization on the last line!
    
    // decrement num
    num--
}
