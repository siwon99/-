let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.shift());
const expression = input.shift();
const stack = [];
let value = new Map();

for (let i = 0; i < expression.length; i++) {
  const cur = expression[i];

    if (/[A-Z]/.test(cur)) {
      if(!value.has(cur)) {
        value.set(cur, input.shift());
      }
      stack.push(value.get(cur));
    } else {
      let two = Number(stack.pop());
      let one = Number(stack.pop());
  
    switch(cur) {
      case '+':
        stack.push(one + two);
        break;
      case '-':
        stack.push(one - two);
        break;
      case '*':
        stack.push(one * two);
        break;
      case '/':
        stack.push(one / two);
        break;
    }
  }
}

console.log(stack[0].toFixed(2));