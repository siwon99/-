const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const leftCounts = input[1].split(' ').map(Number);
const result = [];

for (let i = N; i >= 1; i--) {
  let cnt = leftCounts[i - 1];
  result.splice(cnt, 0, i);
}

console.log(result.join(' '));