function getMyInfo(name,fun1){
    console.log(`My name is ${name}`);
    fun1();
}

function goodBye(){
    console.log("Good Bye!");
}

getMyInfo("Jananthan",goodBye);