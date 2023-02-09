/*
Una callback o llamada de retorno, es una función que se pasa como argumento
de otra función, para luego ser invocada dentro de la función externa para
completar algún tipo de rutina o acción
*/

// Ejemplo de callback síncrono

// función callback
function greeting(name) {
  alert(`Hello ${name}`);
}

// función externa
function processUserInput(callback) {
  const name = prompt('Please enter your name');
  callback(name);
}

processUserInput(greeting);

// ---------------------------------- //

function sum(num1, num2) {
  return `Sum: ${num1 + num2}`;
}

function rest(num1, num2) {
  return `Rest: ${num1 - num2}`;
}

function mult(num1, num2) {
  return `Multiplication: ${num1 * num2}`;
}

function div(num1, num2) {
  return `Division: ${num1 / num2}`;
}

function calculate(num1, num2, operations) {
  console.log(`Numbers: (${num1}, ${num2})`);
  return operations.forEach((operation) => console.log(operation(num1, num2)));
}

const operations = [sum, rest, mult, div];

calculate(90, 10, operations);
calculate(50, 50, operations);

// ---------------------------------- //

setTimeout(
  function sayHi(name) {
    console.log(`Hola ${name}`);
  },
  4000,
  'Oscar'
);

function greeting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greeting, 3000, 'Elijah');
