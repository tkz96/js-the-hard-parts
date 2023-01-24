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

/*
Any function that takes in a function or returns a function is a Higher-Order Function HOF.
The "baby" function that an HOF takes in is a callback function.
*/

function multiplyBy2(input) { return input * 2; } // 1

const multiplyBy2 = (input) => { return input * 2 } // 2

const multiplyBy2 = (input) => input*2; // 3

const multiplyBy2 = input => input*2; // 4

/*
The Arrow function was introduced in ES6.
As we descend, the same code is becoming more and more legible but not necessarily more readable.
We have less to look at and it is prettier, but it is essentially doing the same that is happening on line 51.
The arrow function implicitly adds a return keyword.
const x = () => {}

Anonymous functions are functions being passed to HOFs.
({})
*/

function createFunc() {
  function multiplyBy2(num) {
    return num*2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunc();
const result = generatedFunc(3);

/*
Closures are said to be the most esoteric parts of JS. Those who can understand them understand JS.
Returning a function from another function.
*/