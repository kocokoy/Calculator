const calculatorButton = [1,2,3,4,5,6,7,8,9,0];
const operatorButton = ['+','-','*','/','='];
const container = document.querySelector('.number-container');
const operatorContainer = document.querySelector('.operator-container');
const numberButton = document.querySelectorAll('.number-button');
const outputBar= document.querySelector('.output-number');
let number = '';

calculatorButton.forEach((number) => {
  const div = document.createElement('button');
  div.textContent = number;
  div.classList.add(`number-button`);
  container.appendChild(div);
})
operatorButton.forEach((number) => {
  const div = document.createElement('button');
  div.textContent = number;
  div.classList.add(`number-button`);
  operatorContainer.appendChild(div);
})

numberButton.forEach(numButton => {
  numButton.addEventListener('click', () => {
    showNumbers(numButton.textContent)
  })
})

const showNumbers = (a) => {
  number+=a;
  outputBar.textContent = number;
  // operate(number);
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


