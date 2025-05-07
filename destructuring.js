//Destructuring

//Basic object destructuring
const user = {
    name:"Gautam",
    age:22
};
const{name,age}=user;
console.log(`Name:${name},Age:${age}`);

console.log("________________________________________________________________")

//Array Destructuring
const numbers=[1,2,3];
const[a,b,c]=numbers;
console.log(a,b,c);//output:1,2

console.log("________________________________________________________________")

//default values in object
const person={
    name1:"Spider"
};
const {name1,city ="Unknown"} = person;
console.log(name1,city);//output: Spider Unknown

console.log("________________________________________________________________")

//rest Syntax in Array
const values=[10,20,30,40];
const [head,...tail] = values;
console.log(head,tail);//output: 10[20,30,40]

console.log("________________________________________________________________")

//alias in object destructuring
const data = {id:1,title:"post"};
const {title:postTitle}=data;
console.log(postTitle);//output:post

console.log("________________________________________________________________")

//Nested Object Destructuring
const profile ={user:{name2:"Gautam",age1:22}};
const {user:{name2,age1}}=profile;
console.log(name2,age1);//output: Gautam 22

console.log("________________________________________________________________")

//Function Parameter Destructuring
const printUser=({name01,age0}) => console.log(`${name01} is ${age0}`);
printUser({name01:"Gautam",age0:22});//output:Gautam is 22

console.log("________________________________________________________________")

//swapping variables
let m=5,n=10;
[m,n]=[n,m];
console.log(m,n);//output:10,5

console.log("________________________________________________________________")

//Skipping Elements in Array
const items =[1,2,3,4];
const [,,third]=items;
console.log(third);//output:3

console.log("________________________________________________________________")

//Rest Syntax in Object
const car = {brand:"Toyota", model:"Camry",year:2020};
const {brand,...details}=car;
console.log(brand,details);//output:Toyota{model:"Camry",year:2020}

console.log("________________________________________________________________")


