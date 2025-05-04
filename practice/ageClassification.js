//age classification
function classification(age){
    if (age <10){
        console.log("You are a child");
    }
    else if(age >=10 && age <20){
        console.log("You are a teenager");
    }
    else if(age >=20 && age <30){
        console.log("You are a young adult");
    }
    else if(age >=30 && age <40){
        console.log("You are a middle-aged adult");
    }
    else{
        console.log("You are a senior citizen");
    }
}
classification(5); // Output: You are a child
classification(15); // Output: You are a teenager
classification(25); // Output: You are a young adult
classification(35); // Output: You are a middle-aged adult
classification(45); // Output: You are a senior citizen