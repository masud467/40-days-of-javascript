console.log("Day- 14");

// 1. What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
// ReferenceError -> This is the output
// SyntaxError
// TypeError
// No error, it prints 10

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
let balance = 1000;
function processPayment(amount) {
  try {
    if (amount <= 0) {
      throw new Error("Payment amount must be greater than zero.");
    }
    if (amount > balance) {
      throw new Error("Insufficient balance for this payment.");
    }
    balance -= amount;
    console.log(`Payment of ${amount} processed successfully.`);
    console.log(`Remaining balance: ${balance}`);
  } catch (error) {
    console.error("Payment failed:", error.message);
  }
}
processPayment(1000);

// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

let userName = "John";
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function userError(user) {
  if (user !== userName) {
    throw new ValidationError("User not match!");
  }
  return `Your input ${user} matched with userName`;
}

try {
  const message = userError("John");
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch
function fetchData(url) {
  if (url.indexOf("https") !== 0) {
    throw new Error("Invalid URL");
  }
  return "Data fetched successfully " + url;
}

try {
  const result = fetchData("http://example.com");
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
}

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validateUser(user) {
  if (!user.username) {
    throw new ValidationError("Username cannot be empty");
  }

  if (user.age <= 0) {
    throw new ValidationError("Age must be a positive number");
  }
  return "User is valid";
}
const userInput = { username: "", age: -2 };
try {
  const result = validateUser(userInput);
  console.log(result);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

// 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
// Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.
function readFile(filePath) {
  console.log("Opening file:", filePath);
  try {
    let fileExist = false;
    // let fileExist = true;
    if (!fileExist) {
      throw new Error("File not found");
    }
    console.log("Reading file data...");
    console.log("File read successfully");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Closing file and releasing IO resources");
  }
}

readFile("data.txt");

// try {
//   const result = readFile("Js");
//   console.log(result);
// } catch (error) {
//   console.error("Error:", error.message);
// }

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return "Invalid JSON";
  }
}
const result = parseJson('{"name": "John", "age": 25}');
console.log(result);

const result1 = parseJson("{name: John}");
console.log(result1);

// 8. What is the purpose of throw in JavaScript?
// It catches an error
// It stops the execution of a program
// It creates a new error manually -> This is correct
// It prints an error message

// 9. What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not -> this is correct
// Stops the execution of the script

// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
