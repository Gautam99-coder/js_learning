// Variables for demonstration
let num1 = 10;
let num2 = 5;
let name = "Alice";

// 1. Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(num1, num2)); // Output: 15

// 2. Function Expression
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(num1, num2)); // Output: 5

// 3. Arrow Function (ES6)
const multiply = (a, b) => a * b; // Implicit return for single expression
console.log(multiply(num1, num2)); // Output: 50

// 4. Function with Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet(name)); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!

// 5. Function with Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// 6. Function with Object Parameter
function describePerson({ name, age = 18 }) {
  return `${name} is ${age} years old.`;
}
const person = { name: "Bob", age: 25 };
console.log(describePerson(person)); // Output: Bob is 25 years old.

// 7. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This runs immediately!"); // Output: This runs immediately!
})();

// 8. Function with Conditional Logic
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else return "F";
}
console.log(getGrade(85)); // Output: B

// 9. Higher-Order Function (Function as Parameter)
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(num1, num2, add)); // Output: 15

// 10. Anonymous Function in Array Method
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6]