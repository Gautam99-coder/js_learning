//Spread Operator

const original =[1,2,3];
const copy =[...original];
console.log(copy)//outputs:[1,2,3]
copy.push(4);
console.log(original);//output: [1,2,3](original unchanged)
