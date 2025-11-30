// 1. Odd or Even
let number = 5;
console.log(number);
console.log(number % 2 === 0 ? "Even" : "Odd");

// 2. Do you have a Driving License?
let age = 27;
console.log(
  age >= 18
    ? "Yes, The age is elligible for a driving license"
    : "No, the age is elligible for a driving license"
);

// 3. Calculate CTC with a Bonus
let monthlySalary = 12300;
let annualSalary = 12300 * 12;
let bonus = annualSalary * 0.2;
let CTC = annualSalary + bonus;
console.log(CTC);

// 4. Write a program for the Traffic Light Simulation.

let color = "Green";
console.log(color === "Green" ? "GO" : "Stop");

// 5. Create an Electricity Bill Calculator
let units = 10;
let perDayCharged = units * 150;
let perMonthCharged = perDayCharged * 30;
let annualPayment = perMonthCharged * 12;
let discount = annualPayment * 0.2;
let annualCharged = annualPayment - discount;
console.log(perMonthCharged, annualCharged);

// 6. Leap Year Checker
let year = 2025;
console.log(year % 4 === 0 ? "Leap Year" : "Not Leap Year");

// 7. Max of Three Numbers
let p = 5;
let q = 9;
let r = 2;
let max = p;
max = q > max ? q : max;
max = r > max ? r : max;
console.log(max);
