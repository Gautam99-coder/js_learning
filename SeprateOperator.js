//Spread Operator

const original =[1,2,3];
const copy =[...original];
console.log(copy)//outputs:[1,2,3]
copy.push(4);
console.log(original);//output: [1,2,3](original unchanged)

console.log("___________________________________________________________");

//mergin Arrays
const arr1 = [1,2];
const arr2 =[3,4];
const merged=[...arr1,...arr2];
console.log(merged)

console.log("___________________________________________________________");

//copying an object
const user = {name:"Gautam", age:20};
const clone={...user};
console.log(clone);//Outputs:{name:"Gautam",age:20}
clone.age=22;
console.log(user);//original unchanged

console.log("___________________________________________________________");

//Merging objects
const obj1 = {a:1};
const obj2 = {b:2};
const combined = {...obj1,...obj2};
console.log(combined);//Outputs:{a:1,b:2}

console.log("___________________________________________________________");

//Adding Elements to array;
const numbers =[1,2,3];
const updated =[...numbers,4,5];
console.log(updated);//outputs:[1,2,3,4,5]

console.log("___________________________________________________________");

//updating object properties
const person ={name:"Spider" ,age:24}
const updated1={...person,age:22};
console.log(updated1);

console.log("___________________________________________________________");

//spreading String characters
const word = "Spider";
const chars = [...word];
console.log(chars);//outputs["S","p","i","d","e","r"]

console.log("___________________________________________________________");

//function arguments
const sum = (a,b,c)=> a+b+c;
const numbers0 = [1,2,3];
console.log(sum(...numbers0));//output: 6

console.log("___________________________________________________________");

//combining with New Properties
const settings ={theme: "dark"};
const newSettings = {...settings,fontSize:16};
console.log(newSettings);//Outputs:{theme:"dark",fontSize:16}

console.log("___________________________________________________________");

//rest parameter with spread
const processData =(first,...rest)=> console.log(first,rest);
processData(1,2,3,4);//outputs:1[2,3,4]
