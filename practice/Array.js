//Removing Elements with pop() and Shift();
const colors = ["red","blue","green"];
const last = colors.pop(); //Remove last 
const first=colors.shift(); //Remove first
console.log(colors,last,first); //output: ["blue"] "green" "red"

console.log("________________________________________________________________")

//Using splice() to Add/Remove
const animals = ["cat","dog","bird"];
animals.splice(1,1,"Fish"); //Remove 1 element at index 1, add "fish"
console.log(animals); //outputs:["cat","Fish","bird"]

console.log("________________________________________________________________")

//Slicing and array with slice();
const numbers = [1,2,3,4,5];
const subset = numbers.slice(1,4); //Extract from index 1 to 3
console.log(subset); //outputs:[2,3,4]

console.log("________________________________________________________________")

//iterating with forEach()
const scores = [10,20,30];
scores.forEach((score,index)=>{
    console.log(`Score ${index}: ${score}`);//output: score 0:10,1:20,3:30
});

console.log("________________________________________________________________")

//Transforming jwith map()
const numbers1=[1,2,3];
const doubled= numbers1.map(num => num*2);
console.log(doubled);//output: [2,4,6]

console.log("________________________________________________________________")

//filtering with filter()
const ages = [15,18,22,16];
const adults = ages.filter(age => age >=18);
console.log(adults); //[18,22]

console.log("________________________________________________________________")

//Reducing with reduce()
const values = [5,10,15];
const sum = values.reduce((acc,curr)=> acc + curr,0);
console.log(sum); //Outputs:30

console.log("________________________________________________________________")

//sorting and reversing
const names=["Gautam","Spider","Bhai"];
names.sort(); //alphabetical sort
console.log(names);
names.reverse(); //Reverse order
console.log(names);

console.log("________________________________________________________________")
