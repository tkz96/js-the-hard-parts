const num = 3;

// parameter is num; argument is 3
// The value of num is stored in memory

function multiplyBy2(input) { return input * 2; }

const output = multiplyBy2(num);
// const output = 6;
// multiplyBy2(3) will evaluate to 6, meaning that it will transform into 6
// all values come from memory and stored into memory. A label "output" is created and assigned to the value 6
const newOutput = multiplyBy2(10);


/*
a function is like a mini application in itself.

Execution context is created when a function is invoked - created to run the code of a function.
Has 2 parts:
1. thread of execution
2. memory space

*/


/*
Javascript is a single threaded language. It can only do one thing at a time.
It keeps a track of what it is doing in the call stack.
The stack is a data structure that is LIFO (last in, first out).
The call stack stacks up the functions that are being executed.
There is always a global() function at the bottom of the stack.

*/

function copyArrayAndManipulate(array, instruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}
 
const inputArray = [1, 2, 3];
function copyArrayAndManipulate(inputArray, multiplyBy2);