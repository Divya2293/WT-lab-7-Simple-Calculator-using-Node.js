
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


