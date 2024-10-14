const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);

const array = [];
for (let i = 0; i < N; i++) {
  const [name, value] = input[i].split(' ');
  array.push([name, parseInt(value, 10)]);
}

const powers = input.slice(N).map(Number);
let result = '';

for (let i = 0; i < M; i++) {
  const power = powers[i];
  let left = 0;
  let right = N - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (power <= array[mid][1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  result += array[left][0] + '\n';
}

console.log(result);