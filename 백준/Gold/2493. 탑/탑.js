let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [n, string] = input;

function solution(n, string) {
  const split = string.split(' ').map(Number);
  const stack = [];
  const answer = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1][1] < split[i]) {
      stack.pop();
    }
    answer.push(stack.length ? stack[stack.length - 1][0] : 0);
    stack.push([i + 1, split[i]]);
  }
  return answer.join(' ');
}

console.log(solution(n, string));