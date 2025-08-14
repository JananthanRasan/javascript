//Object Constructor
// function createObject(fname, lname, age){
//     return{
//             "fname":fname,
//             "lname":lname,
//             "age":age
//     };
// }


//Object Literal
function createObject(fname, lname, age){
    return{
            fname,
            lname,
            age
    };
}

let stu1 = createObject("Janan", "Rasan", 25);
console.log(stu1);

//Object Destructuring
let {fname, lname, age} = stu1;
console.log(fname);
console.log(lname);
console.log(age);

//Object Destructuring with new name
let {fname:firstName, lname:lastName, age:myAge} = stu1;
console.log(firstName);
console.log(lastName);
console.log(myAge);