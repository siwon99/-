const fs = require('fs');

const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const output = [];

const GCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
};

const solution = (n, arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += GCD(arr[i], arr[j]);
    }
  }
  return sum;
};

input.forEach(line => {
  const [n, ...arr] = line.split(' ').map(Number);
  output.push(solution(n, arr));
});

console.log(output.join('\n'));