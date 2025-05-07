//Accessing Characters
const greeting = "Hello,Spider!";
console.log(greeting[0]);//Outputs:H
console.log(greeting.charAt(1));//Outputs:e

console.log("________________________________________________________________")

//String length
const text ="JavaScript";
console.log(text.length);

console.log("________________________________________________________________")

//slicing a string
const phrase = "I love coding";
const part = phrase.slice(2,6);//extract from index 2 to 5
console.log(part);
console.log(part.toUpperCase());
console.log(part.toLowerCase());

console.log("________________________________________________________________")

//searching with indexOf() and includes()
const sentence = "The quick brown fox";
console.log(sentence.indexOf("quick"));//Outputs: 4
console.log(sentence.includes("fox"));//Outputs: true

console.log("________________________________________________________________")

//splitting a String
const list = "apple,banana,orange";
const fruits = list.split(",");
console.log(fruits);//outputs in array: ["apple","banana","orange"]

console.log("________________________________________________________________")

//Replacing Text
const text1="I like dogs";
const newText = text1.replace("dogs","cats");
console.log(newText); //Outputs: I like cats

console.log("________________________________________________________________")

//Trimming Whitespace
const input = " Hello Spider ";
console.log(input.trim());//Outputs:Hello Spider

console.log("________________________________________________________________")

//Using Template Literals;
const name1 = "Gautam";
const age=22;
const message = `Hi, I'm ${name1} and I'm ${age} years old.`;
console.log(message);

console.log("________________________________________________________________")

//checking Prefix/Suffix
const url = "https://example.com";
console.log(url.startsWith("https"));//Outputs:true
console.log(url.endsWith(".com")); //outputs: true

console.log("________________________________________________________________")
