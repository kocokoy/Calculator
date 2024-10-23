const numbers = [1,2,3,4,5,6,7,8,9,0];


const container = document.querySelector('.container');
numbers.forEach((number,index) => {
  const div = document.createElement('button');
  div.classList.add = `number-button`;
  div.textContent(number);
  container.appendChild(div);
})

const addOperator = (a,b) => {
  let sum = 0;
  sum = a+b;
  return console.log(sum);
}
