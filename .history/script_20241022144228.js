const calculatorButton = ['Clear',1,2,3,4,5,6,7,8,9,0];
const operatorContent = ['/','x','-','+','='];
const numberContainer = document.querySelector('.number-container');
const numberButton = document.querySelectorAll('.number-button');
const clearButtonContainer = document.querySelector('.clear-button-container');
const zeroButtonContainer = document.querySelector('.zero-button-container');
const operatorContainer = document.querySelector('.operator-container');
const operatorButton = document.querySelectorAll('.operator-button');
const outputElement = document.querySelector('.output-number');

let num1 = '';
let num2 = '';
let operator = '';
let result = 0;
let equals ='';
let html = '';

const descendedNumber = calculatorButton.sort((a,b) => b-a)
for(const num of descendedNumber){
  for(const operand of operatorContent){
    const button = document.createElement('button');
    const operandButton = document.createElement('button');
    if(num === 'Clear' && operand === '/'){
      button.classList.add('clear-button');
      operandButton.classList.add('operand-button');
      button.textContent = num;
      operandButton.textContent = operand;
      clearButtonContainer.appendChild(button);
      clearButtonContainer.appendChild(operandButton);
      continue;
    }else if(num === 0){
      button.classList.add('number-button');
      button.textContent = num;
      console.log(button);
      zeroButtonContainer.appendChild(button);
    }else{
      button.classList.add('zero-button');
      button.textContent = num;
      numberContainer.appendChild(button);
    }
  }
}
// descendedNumber.forEach(num => {
// });

operatorContent.forEach(oper => {
  const button = document.createElement('button');
  button.classList.add('operator-button');
  button.textContent = oper;
  operatorContainer.appendChild(button);
});


operatorButton.forEach((operButton,i) => {
  operButton.addEventListener('click', () => {
    if(operButton.textContent != '='){
      operator = operButton.textContent;
      outputElements(operator);
    }else{
      equals = operButton.textContent;
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
      num1 += numButton.textContent;
      outputElements(numButton.textContent);
      console.log('Num1:', num1);
    } else {
      num2 += numButton.textContent;
      outputElements(numButton.textContent);
      console.log('Num2:', num2);
    }
  })
})


function outputElements(a){
  if(num1 && num2 && operator && equals){
    outputElement.textContent = '';
    outputElement.textContent = a;
  }else{
    html+=a;
    console.log(html);
    outputElement.textContent = html;
  }
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


