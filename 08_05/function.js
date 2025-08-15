function operation(num1,num2, op) {
    num1=Number(num1);
    num2=Number(num2);

    if(isNaN(num1)||isNaN(num2)){
        console.log(`Enter correct Numbers`);
        return;
    }

    if(op=="+"){
        total = num1+num2;
        console.log(`${num1} ${op} ${num2} = ${total}`);
    }else if(op=="-"){
        total = num1-num2;
        console.log(`${num1} ${op} ${num2} = ${total}`);
    }else if(op=="*"){
        total = num1*num2;
        console.log(`${num1} ${op} ${num2} = ${total}`);
    }else if(op=="/"){
        total = num1/num2;
        console.log(`${num1} ${op} ${num2} = ${total}`);
    }else if(op=="%"){
        total = num1%num2;
        console.log(`${num1} ${op} ${num2} = ${total}`);
    }

}

operation(2,2,"+");
operation(2,2,"-");
operation(2,2,"/");
operation(2,2,"*");