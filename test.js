const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      let result;
      switch(operation) {
        case 'add':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case 'subtract':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case 'multiply':
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case 'divide':
          if(secondNumber != 0) {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
          } else {
            console.log('Error: Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Error: Invalid operation. Only add, subtract, multiply, and divide are allowed.');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});