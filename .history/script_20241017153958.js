const calculatorButton = [1,2,3,4,5,6,7,8,9,0];
const operatorButton = ['+','-','*','/','='];
const container = document.querySelector('.number-container');
const operatorContainer = document.querySelector('.operator-container');

let numbers = [];
let num1 = '';
let num2 = '';
let operator = '';

// calculatorButton.forEach((number) => {
//   const div = document.createElement('button');
//   div.textContent = number;
//   div.classList.add(`number-button`);
//   container.appendChild(div);
// })
// operatorButton.forEach((number) => {
//   const div = document.createElement('button');
//   div.textContent = number;
//   div.classList.add(`number-button`);
//   operatorContainer.appendChild(div);
// })
const numberButton = document.querySelectorAll('.number-button');
// const outputBar= document.querySelector('.output-number');

numberButton.forEach(numButton => {
  numButton.addEventListener('click', () => {
    numbers.push(numButton.textContent);
    
  })
})

numbers.forEach(num => {
  console.log(num);
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
  let sum = 0;
  sum = a-b;
  return console.log(sum);
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


