const calculatorButton = [1,2,3,4,5,6,7,8,9,0];
// const operatorButton = ['+','-','*','/','='];
const container = document.querySelector('.number-container');
const operatorContainer = document.querySelector('.operator-container');
const numberButton = document.querySelectorAll('.number-button');
const operatorButton = document.querySelectorAll('.operator-button');

let numbers = [];
let num1 = '';
let num2 = '';
let operator = '';


numberButton.forEach((numButton,i) => {
  numButton.addEventListener('click', () => {
    if (operator === '') {
      // If no operator yet, append to num1
      num1 += numButton.textContent;
      console.log('Num1:', num1);
    } else {
      // If operator exists, append to num2
      num2 += numButton.textContent;
      console.log('Num2:', num2);
    }
  })
})

operatorButton.forEach((numButton,i) => {
  numButton.addEventListener('click', () => {
    if (operator === '') {
      // If no operator yet, append to num1
      num1 += numButton.textContent;
      console.log('Num1:', num1);
    } else {
      // If operator exists, append to num2
      num2 += numButton.textContent;
      console.log('Num2:', num2);
    }
  })
})



function operate(num1,num2,operator){
  if(operator === '+'){
    addOperator(num1,num2)
  }else if(operator === '-'){
    minusOperator(num1,num2) 
  }else if(operator === '*'){
    timesOperator(num1,num2)
  }else if(operator === '/'){
    divideOperator(num1,num2)
  }
}


const addOperator = (a,b) => {
  let sum = 0;
  sum = a+b;
  return console.log(sum);
}

const minusOperator = (a,b) => {
  let sub = 0;
  sub = a-b;
  return console.log(sub);
}

const timesOperator = (a,b) => {
  let sum = 0;
  sum = a*b;
  return console.log(sum);
}

const divideOperator = (a,b) => {
  let sum = 0;
  sum = a/b;
  return console.log(sum);
}


