
// Commented out code is for terminal, this is used for brower

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// function fizzbuzz(parseInt) {
    for(let i = 1; i <= answer; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        }else {
            console.log(i);
        }
        // return;
    }
// }
// fizzbuzz(25);