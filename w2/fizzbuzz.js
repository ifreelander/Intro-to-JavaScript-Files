//write for loop for 20
//iterate by +1
//check if number i % by 3 then type Fizz
////check if number i % by 5 then type buzz
//if it's divisable by 5 and 3 print fizzbuzz
// if code is not divisible by EITHER then print the number


for (i = 0; i < 19; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FIZZBUZZ');

    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    }
    // if code is not divisible by EITHER then print number
    else console.log(i);
}
