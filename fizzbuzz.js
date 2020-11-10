// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples 
// of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz')
    } else if (i  % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
   }