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
let result = 0;
let equals ='';
let html = '';

calculatorButton.sort((a,b) => b-a).map(num => {
  const num = document.createElement('button');
  num.classList.add('number-button');
  num.textContent = num;
  container.appendChild(num);
  console.log(div);
});


// calculatorButton.forEach(number => {

// });


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


