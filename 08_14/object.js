//Object Constructor
function createObject(fname, lname, age){
    return{
            "fname":fname,
            "lname":lname,
            "age":age,
            getfullname(){
                return `Full Name: ${fname} ${lname}`;
            }
    };
}


//Object Literal
// function createObject(fname, lname, age){
//     return{
//             fname,
//             lname,
//             age,
//     };
// }

let stu1 = createObject("Janan", "Rasan", 25);
let {fname="Janan", lname="Rasan", age=25, getfullname} = stu1;
console.log(getfullname());


//Object Destructuring with default value
// let {fname="Janan", lname="Rasan", age=25, gender='Male'} = stu1;
// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(gender);

//Object Destructuring with new name
// let {fname:firstName, lname:lastName, age:myAge} = stu1;
// console.log(firstName);
// console.log(lastName);
// console.log(myAge);

//Object Destructuring with rest operator
//rest operator must be last and one in a function
// let {fname, ...data}=stu1;
// console.log(fname);
// console.log(data);