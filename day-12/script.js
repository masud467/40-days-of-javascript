console.log("Day-12");
// 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // Output: Not provided
// because it it Nullish Coalescing. In Nullish Coalescing, If the first expression  or operand is null or undefined then return the second otherwise return the first

// 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1
// We can not modify a frozen object

// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
const { name, company } = person;
console.log(name, company); // Tapas
const city = person.address?.city;
console.log(city); // undefined

// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

// grades with array
const student = {
  name: "Masud",
  age: 22,
  grades: [85, 78, 90, 88],

  calculateAverage() {
    let total = 0;

    for (let grade of this.grades) {
      total = total + grade;
    }
    return total / this.grades.length;
  },
};
console.log(student.calculateAverage());

// grades with object
const students = {
  name: "Masud",
  age: 22,
  grades: {
    math: 85,
    english: 78,
    science: 90,
  },

  calculateAverageGrade() {
    let values = Object.values(this.grades);
    let total = 0;

    for (let grade of values) {
      total += grade;
    }

    return total / values.length;
  },
};

console.log(students.calculateAverageGrade());

// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const books = {
  "JavaScript Basics": 5,
  "Advanced CSS": 2,
  "Node.js Guide": 0,

  checkAvailability(bookStore, bookName) {
    if (bookName in bookStore) {
      if (books[bookName] > 0) {
        console.log(bookName + " is available");
      } else {
        console.log(bookName + " is out of stock");
      }
    } else {
      console.log(bookName + " does not exist in the store");
    }
  },

  restock(bookStore, bookName, quantity) {
    if (bookName in bookStore) {
      bookStore[bookName] = bookStore[bookName] + quantity;
    } else {
      bookStore[bookName] = quantity;
    }
    console.log(bookName + " restocked. Current stock: " + bookStore[bookName]);
  },
};
books.checkAvailability(books, "JavaScript Basics"); // JavaScript Basics is available
books.checkAvailability(books, "Node.js Guide"); // Node.js Guide is out of stock
books.checkAvailability(books, "React"); // React does not exist in the store

books.restock(books, "Node.js Guide", 4); // Node.js Guide restocked. Current stock: 4
books.restock(books, "React", 10); // React restocked. Current stock: 10

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
// Object.keys()->It returns an array of the enumerable property names of an object.
const obj1 = {
  name: "JS",
  age: 35,
};
const keys = Object.keys(obj1);
console.log(keys); // ['name', 'age']

// Object.entries()->It returns an array f an object's enumerable property [key, value] pairs.
const obj2 = {
  name: "JS",
  age: 35,
};
const entries = Object.entries(obj2);
console.log(entries); // [['name', 'JS'], ['age', 35]]

// 7. How do you check if an object has a certain property?
// With -> Object.hasOwn()

const details = {
  name: "Masud",
  position: "Junior Developer",
  company: "ABC",
};

console.log(Object.hasOwn(details, "name")); // true
console.log(Object.hasOwn(details, "address")); // false

// 8. What will be the output and why?
const man = { name: "John" };
const newPerson = man;
newPerson.name = "Doe";
console.log(man.name); // Doe

// 9. What’s the best way to deeply copy a nested object? Expalin with examples
// structuredClone() is the best way
const clone = {
  a: 1,
  b: { c: 2 },
};

const clone2 = structuredClone(clone);
clone2.a = 100;
clone2.b.c = 200;

console.log(clone2.a); // 100
console.log(clone.a); // 1

console.log(clone2.b.c); // 200
console.log(clone.b.c); // 2

// 10. Loop and print values using Object destructuring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
// Alex 15th Park Avenue 43
// Bob Canada 53
// Carl Bangalore 26
