
/*var readline = require('readline');

var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "+") {
      var result = x + y;
    } else if (op === "-") {
      var result = x - y;
    } else if (op === "/") {
      var result = x / y;
    } else if (op === "*") {
      var result = x * y;
    } else if (op === "%") {
      var result = x % y;
    } else {
      var result = "Error!"
    }

    console.log("Result: " + result);
  };
}
*/
/*var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");*/
/*const num1 = parseInt(await getInput('Enter the first number: '));
const num2 = parseInt(await getInput('Enter the second number: '));
var op = readline.question("Please enter an operator: ");

var calc = new Calculation(num1, num2, op);

calc.result();*/




const operations = require('./operation');
const readline = require('readline');
function getInput(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  async function calculator() {
    const num1 = parseInt(await getInput('Enter the first number: '));
    const num2 = parseInt(await getInput('Enter the second number: '));
    const operation = await getInput('Choose an operation (+, -, *, /): ');
    let result;
    switch (operation) {
      case '+':
        result = operations.add(num1, num2);
        break;
      case '-':
        result = operations.subtract(num1, num2);
        break;
      case '*':
        result = operations.multiply(num1, num2);
        break;
      case '/':
        result = operations.divide(num1, num2);
        break;
      default:
        console.log('Invalid operation');
        return;
    }
    console.log(`The result is: ${result}`);
  }
calculator();


