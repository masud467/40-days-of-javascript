// 1. What will be the output of this code snippet and why?
let day = "Monday";
switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
} // The output of this code snippet will-It's a normal day, because case-sensitive issue

// 2. Build an ATM Cash Withdrawal System
let amount = 200000;
if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// 3. Build a Calculator with switch-case
let a = 20;
let b = 10;
let operator = "%";
switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;

  default:
    console.log("Nothing match");
}

// 4. Pay for your ticket
let age = 17;
if (age < 18) {
  console.log("$3");
} else if (age <= 60) {
  console.log("$10");
} else if (age > 60) {
  console.log("$8");
}

// Horoscope Sign Checker
let birthMonth = "March-April";
switch (birthMonth) {
  case "March-April":
    console.log("Aries");
    break;
  case "April-May":
    console.log("Taurus");
    break;
  case "May-June":
    console.log("Gemini");
    break;
  default:
    console.log("Unknown");
}

// 6. Which Triangle?
let x = 3;
let y = 3;
let z = 3;
if (x === y && y === z) {
  console.log("Equilateral Triangle");
} else if (x === y || y === z || z === x) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}

let equalCount = 0;
if (x === y) equalCount++;
if (y === z) equalCount++;
if (x === z) equalCount++;
console.log(equalCount);
