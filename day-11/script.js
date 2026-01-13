// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); //1
counter(); //2

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //100

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
function dynamicButton() {
  let clickCount = 0;

  document.getElementById("btn").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}
dynamicButton();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function (number) {
    return multiplier * number;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); //10
console.log(triple(5)); //15

// 5. What happens if a closure references an object?
// 1. The object is garbage collected immediately
// 2. The object remains in memory as long as the closure exists
// 3. The object is automatically cloned
// 4. None of the Above.

// Correct Answer: 2. The object remains in memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.
function counterFactory(initialize) {
  let counter = initialize;

  return {
    increment: function (incrementCounter) {
      counter += incrementCounter;
      console.log(
        "Increment Counter: ",
        incrementCounter,
        "Total Counter: ",
        counter
      );
    },
    decrement: function (decrementCounter) {
      counter -= decrementCounter;
      console.log(
        "Decrement Counter: ",
        decrementCounter,
        "Total Counter: ",
        counter
      );
    },
    reset: function () {
      counter = 0;
      console.log("Reset Counter", counter);
    },
    getCounter: function () {
      counter;
      console.log("Get Counter: ", counter);
    },
  };
}

const counterView = counterFactory(10);
counterView.increment(20);
counterView.decrement(20);
counterView.getCounter();
counterView.reset();
counterView.getCounter();

// Another business logic for the above problem
function crateCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const countView = crateCounter();
console.log(countView.increment()); // 1
console.log(countView.increment()); // 2
console.log(countView.getCount()); // 2
console.log(countView.decrement()); // 1
console.log(countView.getCount()); // 1
console.log(countView.reset()); // 0
console.log(countView.getCount()); // 0
