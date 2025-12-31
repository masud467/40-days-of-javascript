// 1. Write a Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const formula = (celsius * 9) / 5 + 32;
  return formula;
}
console.log(celsiusToFahrenheit(32));

// 2. Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(findMax(52, 6));

// 3. Function to Check if a String is a Palindrome
function isPalindrome(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  if (string === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));

let string = "madam";
let reverse = "";
for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}
if (string === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 4. Write a Function to Find Factorial of a Number
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 5. Write a function to Count Vowels in a String
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("javascript is awesome"));

// 7. Use an IIFE to Print “Hello, JavaScript!”
(function IIFE(name) {
  console.log("Hello, " + name);
})("Javascript!");

// 8. Create a Simple Callback Function
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greet("Masud", sayBye);
