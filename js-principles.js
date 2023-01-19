const num = 3;

// parameter is num; argument is 3
// The value of num is stored in memory

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);


/*
a function is like a mini application in itself.

Execution context is created when a function is invoked - created to run the code of a function.
Has 2 parts:
1. thread of execution
2. memory space


*/
