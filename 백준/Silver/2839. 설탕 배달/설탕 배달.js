const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

function solution(N) {
  let x = 0;

  for(let i = Math.floor(N / 5); i >= 0; i--) {
    x = N - (i * 5);
    if(x % 3 === 0) {
      return i + Math.floor(x / 3);
    }
  }
  return -1;
}

let result = solution(N);
console.log(result);