const calculatorButton = ['Clear',1,2,3,4,5,6,7,8,9,0,'.'];
const operatorContent = ['/','x','-','+','='];
const numberContainer = document.querySelector('.number-container');
const clearButtonContainer = document.querySelector('.clear-button-container');
const zeroButtonContainer = document.querySelector('.zero-button-container');
const operatorContainer = document.querySelector('.operator-container');
const outputElement = document.querySelector('.number');
// const number = document.querySelector('.number');

let num1 = '';
let num2 = '';
let operator = '';
let result = 0;
let equals ='';
let html = '';
displayButton();


function displayButton(){
  const descendedNumber = calculatorButton.sort((a,b) => b-a)
  for(const num of descendedNumber){
    const button = document.createElement('button');
    if(num === 'Clear'){
      button.classList.add('clear-button');
      button.textContent = num;
      clearButtonContainer.appendChild(button);
    }else if(num === 0 || num === '.'){
      button.classList.add('zero-button');
      button.textContent = num;
      zeroButtonContainer.appendChild(button);
    }else{
      button.classList.add('number-button');
      button.textContent = num;
      numberContainer.appendChild(button);
    }
  }

  operatorContent.forEach(operand => {
    const button = document.createElement('button');
    button.classList.add('operator-button');
    button.textContent = operand;
    operatorContainer.appendChild(button);
  });

  buttonsClicked();
}

function buttonsClicked(){
  const operatorButton = document.querySelectorAll('.operator-button');
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
}

const numberButton = document.querySelectorAll('.number-button');
numberButton.forEach((numButton,i) => {
  numButton.addEventListener('click', () => {
    console.log(numButton);
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

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',() => {
  clearContent();
  outputElement.textContent = '';
})

function clearContent(){
  num1 = '';
  num2 = '';
  operator = '';
  result = 0;
  equals ='';
  html = '';
  // outputElement.textContent = '';
  console.log(num1);
  console.log(num2);
}


function outputElements(a){
  if(num1 && num2 && operator && equals){
    outputElement.textContent = '';
    outputElement.textContent = a;
    clearContent();
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


