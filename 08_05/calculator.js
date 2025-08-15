function calculator(num1,num2,fun1){
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) && isNaN(num2)){
        console.log("Enter Correct Numbers");
        return;
    }else if(isNaN(num1)){
        console.log("Enter correct Number1");
        return;
    }else if(isNaN(num2)){
        console.log("Enter correct Number2");
        return;
    }
    let result= fun1(num1,num2);
    console.log(result);
}

function addition(num1,num2){
    total=num1+num2;
    return total;
}

function substaction(num1,num2){
    total=num1-num2;
    return total;
}

function division(num1,num2){
    total=num1/num2;
    return total;
}

function multiplication(num1,num2){
    total=num1*num2;
    return total;
}

function modulus(num1,num2){
    total=num1%num2;
    return total;
}

calculator(10,5,addition);
calculator(10,5,substaction);
calculator(10,5,multiplication);
calculator(10,5,division);
calculator(10,5,modulus);


calculator(10,5,(num1,num2)=>num1+num2);
calculator(10,5,(num1,num2)=>num1-num2);
calculator(10,5,(num1,num2)=>num1*num2);
calculator(10,5,(num1,num2)=>num1/num2);
calculator(10,5,(num1,num2)=>num1%num2);

