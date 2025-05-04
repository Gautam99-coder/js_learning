// Variables for demonstration
let score = 85; // Number
let name = "Alice"; // String
let isActive = true; // Boolean
let numbers = [1, 2, 3, 4, 5]; // Array

// 1. Conditional Statements (if, else if, else)
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else {
  console.log("Grade: C or below");
}

// 2. Switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday"); // Output: Wednesday
    break;
  default:
    console.log("Other day");
}

// 3. Ternary Operator (conditional shorthand)
let access = isActive ? "Allowed" : "Denied";
console.log(access); // Output: Allowed

// 4. For Loop (iterating over a range or array)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

// 5. While Loop
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`); // Output: Count: 0, Count: 1, Count: 2
  count++;
}

// 6. Do-While Loop
let x = 0;
do {
  console.log(`X: ${x}`); // Output: X: 0
  x++;
} while (x < 1);

// 7. For...of Loop (iterating over iterable like arrays)
for (let num of numbers) {
  console.log(num * 2); // Output: 2, 4, 6, 8, 10
}

// 8. For...in Loop (iterating over object properties)
let person = { name: "Bob", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Output: name: Bob, age: 25
}

// 9. Break and Continue
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) continue; // Skip 3
  if (numbers[i] > 4) break; // Stop at 5
  console.log(numbers[i]); // Output: 1, 2, 4
}

// 10. Try-Catch (error handling)
try {
  let result = undefinedVar; // Causes error
} catch (error) {
  console.log("Error caught:", error.message); // Output: Error caught: undefinedVar is not defined
}