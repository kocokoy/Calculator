const calculatorButton = [1,2,3,4,5,6,7,8,9,0];
// const operatorButton = ['+','-','*','/','='];
const container = document.querySelector('.number-container');
const operatorContainer = document.querySelector('.operator-container');
const numberButton = document.querySelectorAll('.number-button');
const operatorButton = document.querySelectorAll('.operator-button');
const outputElement = document.querySelector('.output-number');

let num1 = '';
let num2 = '';
let operator = '';
let html = '';
let result = 0;


operatorButton.forEach((operButton,i) => {
  operButton.addEventListener('click', () => {
    if(operButton.textContent != '='){
      operator = operButton.textContent;
      outputElements(operator);
    }else{
      let equals = operButton.textContent;
      if(equals === '='){
        console.log(`${num1}${operator}${num2}`)
        operate(num1,num2,operator);
      }
    }
    
  })
})

numberButton.forEach((numButton,i) => {
  numButton.addEventListener('click', () => {
   
    if (operator === '') {
      // If no operator yet, append to num1
      num1 += numButton.textContent;
      console.log('Num1:', num1);
      outputElements(num1);
    } else {
      // If operator exists, append to num2
      num2 += numButton.textContent;
      console.log('Num2:', num2);
      outputElements(num2);
    }
  })
})

function outputElements(a){
  if(num1 && num2 && operater){
    console.log('test')
  }
  html+=a;
  outputElement.textContent = html;
}




function operate(num1,num2,operator){
  number1 = parseInt(num1,10);
  number2 = parseInt(num2,10);
  if(operator === '+'){
    addOperator(number1,number2);
  }else if(operator === '-'){
    minusOperator(number1,number2); 
  }else if(operator === '*'){
    timesOperator(number1,number2);
  }else if(operator === '/'){
    divideOperator(number1,number2);
  }
}


const addOperator = (a,b) => {
  console.log(a,b);
  result = a + b;
  outputElements(result);
  return console.log(result);
}

const minusOperator = (a,b) => {
  result = a-b;
  outputElements(result);
  return console.log(result);
}

const timesOperator = (a,b) => {
  result = a*b;
  outputElements(result);
  return console.log(result);
}

const divideOperator = (a,b) => {
  sum = a/b;
  outputElements(result);
  return console.log(result);
}


