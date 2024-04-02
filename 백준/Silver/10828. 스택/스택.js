const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0]
let stack = [];
let answer = [];

for (let i = 0; i <= n ; i++) {
  let word = input[i].trim().split(" ")[0];
  let num = Number(input[i].trim().split(" ")[1]);

  switch (word) {
    case 'push':
      stack.push(num);
      break;
    case 'pop':
      answer.push(stack.pop() || -1);
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length == 0 ? 1 : 0);
      break;
    case 'top':
      answer.push(stack[stack.length -1] || -1);
      break;
  }
}

console.log(answer.join('\n'))