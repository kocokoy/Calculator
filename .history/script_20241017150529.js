const calculatorButton = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'/','.','='];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const container = document.querySelector('.number-container');

calculatorButton.forEach((number) => {
  const div = document.createElement('button');
  div.textContent = number;
  div.classList.add(`number-button`);
  container.appendChild(div);
})

const numberButton = document.querySelectorAll('.number-button');
const outputBar= document.querySelector('.output-number');
let number = '';
numberButton.forEach(numButton => {
  numButton.addEventListener('click', () => {
    showNumbers(numButton.textContent)
    console.log(numButton.textContent);
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


