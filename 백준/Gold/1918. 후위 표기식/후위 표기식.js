const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let exp = input[0];

let stack = []; // 스택 배열
let ans = []; // 답 배열

for (let i = 0; i < exp.length; i++) {
  const cur = exp[i];

  // 1. 만약 cur가 알파벳이면
  if (/[A-Z]/.test(cur)) {
    ans.push(cur);
  } 

  // 2. 만약 ()를 만나면 안에 식 먼저 계산하기
  else if (cur === '(') {
    stack.push(cur);
  } 
  
  // )를 만나면 스택 배열에서 (를 만날 때까지 스택에서 연산자 pop하고 ans에 push하기
  else if (cur === ')') {

    // 스택이 비어있지 않고 (를 만날 때까지 pop하기
    while (stack.length && stack[stack.length - 1] !== '(') {
      ans.push(stack.pop());
    }
    stack.pop();
  } 
  
  // 3. 연산 계산하기
  else if (cur === '+' || cur === '-') {
    // 스택이 비어있지 않고 ( 만나고, 이전 값이 * 또는 /라면 stack에서 pop하고 ans 맨 뒤에 추가
    while (stack.length && stack[stack.length - 1] !== '(') {
      ans.push(stack.pop());
    }
    stack.push(cur);
  }
  // 만약 *, /라면 먼저처리
  else if (cur === '*' || cur === '/') {
    while (stack.length && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) {
      ans.push(stack.pop());
    }
    stack.push(cur);
  }
}

while (stack.length) {
  ans.push(stack.pop());
}

console.log(ans.join(''));