//Callbacks

//basic callback with setTimeout
function greet(name,callback){
    setTimeout(()=>{
        callback(`Hello, ${name}!`);
    },2000);
}
greet("Gautam",message => console.log(message));//get outputs after 2s

console.log("___________________________________________________________");

//callback with error handlling
function fetchdata(id,callback){
    setTimeout(()=>{
        if(id<0)return callback(new Error("Invalid Id"),null);
        callback(null,{id,name:"Spider"})
    },2000);
}
fetchdata(1,(err,data)=>{
    if(err) console.error(err.message);
    else console.log(data);//outputs:{id:1,name:"Spider"}
})

console.log("___________________________________________________________");

//Multiple Callbacks
function step1(callback){
    setTimeout(()=>callback("Step 1 done"),1000)};
function step2(callback){
    setTimeout(()=>callback("Step 2 done"),1000);
}
step1(result =>{
    console.log(result);//outputs: Step 1 done
    step2(result2=>console.log(result2));//outputs: Step 2 done
});

console.log("___________________________________________________________");

//callback in Array iteration
const numbers=[1,2,3];
numbers.forEach(num => console.log(num));//outputs:1,2,3

console.log("___________________________________________________________");

//Event Listener callback
//document.addEventListener("click",()=>console.log("Clicked!"));//output: Clicked! (on Click)

console.log("___________________________________________________________");

//simulated API call
function getUser(id,callback){
    setTimeout(()=>callback({id,name:"Spider"}),1000);
}
getUser(2,user => console.log(user))

console.log("___________________________________________________________");

//callback with multiple arguments
function processdata(data,callback){
    setTimeout(()=> callback(data.toUpperCase(),data.length),1000)
};
processdata("hello",(upper,len)=>console.log(upper,len));//outputs: HELLO 5

console.log("___________________________________________________________");

//chained callbacks
function task1(cb){
    setTimeout(()=>cb("Task 1"),1000);
}
function task2(cb){
    setTimeout(()=>cb("Task 2"),1000)
}
function task3(cb){
    setTimeout(()=>cb("Task 3"),1000)
}
task1(res1=>{
    console.log(res1);//outputs:Task 1
    task2(res2 => console.log(res2));//outputs: Task 2
    task3(res3=>console.log(res3));//outputs: Task 3
});

console.log("___________________________________________________________");

//callback for Validation
function validateInput(input,callback){
    setTimeout(()=>{
        if(typeof input !== "string") return callback(new Error("Not a String"));
        callback(null,"Valid");
    },1000)
}
validateInput("test",(err,result)=>{
    if(err) console.log(err.message);
    else console.log(result);//Outputs: Valid
})

console.log("___________________________________________________________");

//Nested Callbacks(callback Hell)
function stepOne(cb){ setTimeout (()=> cb("One"),1000);}
function stepTwo(cb){ setTimeout (()=> cb("Two"),1000);}
function stepThree(cb){ setTimeout (()=> cb("Three"),1000);}
stepOne(res1=>{
    console.log(res1);//outputs:One
    stepTwo(res2=>{
        console.log(res2);//outputs:Two
        stepThree(res3=>console.log(res3));//Outputs: Three
    });
});
