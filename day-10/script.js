console.log("Day-10");
// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user); // Output: Bob
  }
  let user = "Bob";
  inner();
}

outer();

// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

// 3. Create a function with a nested function and log a variable from the parent function.

function func1() {
  let student = "Jon";
  function func2() {
    console.log(student);
  }
  func2();
}

func1();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function test() {
  for (let i = 0; i < 3; i++) {
    let message = "Hello";
    console.log(i, message);
  }
  //console.log(message); // referenceError
}
test();

// 5. Write a function that tries to access a variable declared inside another function.

// 6. What will be the output and why?
// console.log(a); // referenceError
let a = 10;

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
}
// console.log(age);

// Options:
// A: In Global
// B: Only inside showAge //This is correct
// C: It will cause an error
// D: None of the above

// 8. What will be the output and explain the output?
let message = "Hello";

function outer2() {
  let message = "Hi";

  function inner2() {
    console.log(message);
  }

  inner2();
}
outer2(); //Output:Hi

// 9. What will be the output and why?
let x = "Global";

function outer3() {
  let x = "Outer";

  function inner3() {
    let x = "Inner";
    console.log(x);
  }

  inner3();
}
outer3(); // Output: Inner

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
// Output: -1,-2
