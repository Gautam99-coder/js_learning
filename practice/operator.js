// Variables for demonstration
let a = 10; // Number
let b = 5; // Number
let str = "Hello"; // String
let isActive = true; // Boolean

// 1. Arithmetic Operators
let sum = a + b; // Addition: 15
let difference = a - b; // Subtraction: 5
let product = a * b; // Multiplication: 50
let quotient = a / b; // Division: 2
let remainder = a % b; // Modulus: 0
let power = a ** 2; // Exponentiation: 100

// 2. Assignment Operators
let x = 20; // Assignment
x += 5; // x = x + 5; x is now 25
x -= 10; // x = x - 10; x is now 15
x *= 2; // x = x * 2; x is now 30

// 3. Comparison Operators
let isEqual = a == b; // Equality: false
let isStrictEqual = a === b; // Strict equality (type and value): false
let isNotEqual = a != b; // Inequality: true
let isGreater = a > b; // Greater than: true
let isLessOrEqual = a <= b; // Less than or equal: false

// 4. Logical Operators
let andResult = isActive && (a > b); // Logical AND: true
let orResult = isActive || (a < b); // Logical OR: true
let notResult = !isActive; // Logical NOT: false

// 5. String Operators
let greeting = str + " World"; // Concatenation: "Hello World"
let combined = str += "!"; // Concatenation and assignment: "Hello!"

// 6. Increment/Decrement Operators
a++; // Increment: a is now 11
b--; // Decrement: b is now 4

// 7. Ternary Operator
let status = a > b ? "a is greater" : "b is greater"; // "a is greater"

// Output examples
console.log(sum); // 15
console.log(greeting); // "Hello World"
console.log(isGreater); // true
console.log(status); // "a is greater"