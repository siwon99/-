const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let result = [];

for (let i = 0; i < T; i++) {
  let N = Number(input[2 * i + 1]);
  let prices = input[2 * i + 2].split(' ').map(Number);

  let max = 0;
  let profit = 0;

  for (let j = N - 1; j >= 0; j--) {
    if (prices[j] > max) {
      max = prices[j];
    } else {
      profit += max - prices[j];
    }
  }
  result.push(profit);
}
console.log(result.join('\n'));