// Directions:
// Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

// laugh(3);
// Returns: hahaha!


// Declare an empty string
var sound = "" ; 

// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {

    //Iterate
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

// It is essential that the function must return a string
console.log(laugh(3)) ;