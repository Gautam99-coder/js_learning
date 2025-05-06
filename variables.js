var name = "Hello spider!"; //function-scoped ,can be redeclared
let age = 22; //block-scoped, cannot be redeclared
const pi = 3.14; //Block-scoped, cannot be redeclared 

//Exaple of block scope
if(true){
    let blockScoped = "I am only here";
    var functionScoped = "I'm everywhere";

}
//console.log(blockScoped);//Error:blockScoped is not defined
console.log(functionScoped); //output: I'm everywhere