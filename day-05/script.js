// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 2. Create Multiplication Table (Using for loop)
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

// 4. Skipping Multiples of 3 -> Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}

// 5. Reverse Digits of a Number (Using while loop) -> Write a program to reverse the digits of a given number using a while loop.
// Input: 6789
// Output: 9876
let number = 6789;
let reversed = 0;
while (number > 0) {
  let lastDigit = number % 10;
  reversed = reversed * 10 + lastDigit;
  number = (number - lastDigit) / 10;
}
console.log(reversed);
