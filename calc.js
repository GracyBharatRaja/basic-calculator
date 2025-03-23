let selectedOperator=null;

function selectOperator(op,element){

     selectedOperator=op;

    const buttons=document.querySelectorAll(".operator-btn");
    buttons.forEach(btn=>btn.classList.remove('selected'));

    element.classList.add('selected');

}

function calculateResult(){

const num1=parseFloat(document.getElementById("num1").value);
const num2=parseFloat(document.getElementById("num2").value);

let result;

if(!selectedOperator){

    result="Please select an operator"
}
else if(isNaN(num1)|| isNaN(num2)){

    result="Please enter valid number"


}
else{

    switch(selectedOperator){


        case '+':result=num1+num2;break;
        case '-':result=num1-num2;break;
        case '*':result=num1*num2;break;
        case '/':result=num2!==0?num1/num2:"cannot divide by zero";break;
        default:result="please enter a valid number"

    }
}

document.getElementById("result").innerHTML=`Result:${result}`
}

function resetCalculator(){
document.getElementById('num1').value="";
document.getElementById('num2').value="";
document.getElementById('result').innerHTML="";

selectedOperator=null;

const buttons=document.querySelectorAll('.operator-btn');

buttons.forEach(btn=>btn.classList.remove('selected'))



}
