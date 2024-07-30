


var screen = document.getElementById("display");

// let num; 

var screenSet;
var operator;


function pressBtn(num){
    if(screenSet){
    screen.value = num;
    screenSet = false;
}
else{
    screen.value += num;
}
   
}

function setOperator(ope){

    operator = ope;
    console.log(operator);
    screenSet = true;
    result = Number(screen.value);
    console.log(result);


}

function getResult(){
    switch (operator){
    case '+' : 
    screen.value = result + Number(screen.value);
    console.log(screen.value);
    break;
    case '-' : 
    screen.value = result - Number(screen.value);
    break;
    case '*' : 
    screen.value = result * Number(screen.value);
    break;
    case '/' : 
    screen.value = result / Number(screen.value);
    break;
    }
}

function deleteNum(){
 screen.value = screen.value.toString().slice(0, -1);

 console.log(screen.value);

}


function clrAll(){
screen.value = "";

}