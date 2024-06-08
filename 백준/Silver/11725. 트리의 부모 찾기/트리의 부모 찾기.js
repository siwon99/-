let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());

function solution(arr, n) {
  let answer = new Array(n).fill(' ');
  let queue = [0];
  let visited = new Array(n).fill(false);
  let list = Array.from({ length: n }, () => []);
  arr.forEach((val) => {
    const [a, b] = val.split(' ').map(Number);
    list[a - 1].push(b - 1);
    list[b - 1].push(a - 1);
  });

  visited[0] = true;
  while (queue.length > 0) {
    const index = queue.shift();
    list[index].forEach((val) => {
      if (!visited[val]) {
        queue.push(val);
        visited[val] = true;
        answer[val] = `${index + 1}`;
      }
    });
  }
  return answer.join('\n').trim();
}

console.log(solution(input, n));