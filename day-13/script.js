console.log("Day-13");

// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Standalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// -------Please add examples for each of the scenarios.----------

// 2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Hello, !
// Here, the method 'greet' is an arrow function. So, arrow function not its owm this. It inherent its parent scope this.

// fix
const user1 = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user1.greet(); // Hello, tapaScript!

// 3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn(); // Hello, !
// Here, 'greetFn' is no longer connected to the 'obj' object.
// So, we should use explicit binding.

// Fix
greetFn.call(obj); // Hello, Tom!
// other way

const greetFn1 = obj.greet.bind(obj);
greetFn1(); // Hello, Tom!

// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const person = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

person.greet(); // Hello, !
// Here, inner is a standalone function. Not as a method of person.So default binding applies, and `this` becomes the global object.

// Fix
const person1 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

person1.greet(); // Hello, Alex!

// 5. Create a Sports constructor function that takes 'name' and 'number of players' as arguments and assigns them using this keyword. Then, create two sports instances and log their details
const Sports = function (name, players) {
  this.name = name;
  this.players = players;
};
Sports.prototype.log = function () {
  console.log(`${this.name} is needs ${this.players} players`);
};
const cricket = new Sports("Cricket", 11);
cricket.log();

const football = new Sports("Football", 10);
football.log();

//TODO: 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
// Solution 1:It does not permanently attach
const newFun = car1.describe;
newFun.call(car2); // This car is a BMW X1.
car1.describe.call(car2); // This car is a BMW X1.
// Solution 2:
car2.describe = car1.describe;
car2.describe(); // This car is a BMW X1.
// Solution 3: temporary
car1.describe.apply(car2); // This car is a BMW X1.
// Solution 4:
car2.describe = car1.describe.bind(car2);
car2.describe(); // This car is a BMW X1.

// 7. What will be the output of the following code and why?
const person2 = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person2.sayHello();
person2.sayHelloArrow();

// Options are:
// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined -> This is correct option
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"
