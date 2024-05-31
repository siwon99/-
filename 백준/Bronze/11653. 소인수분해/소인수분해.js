const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

function solution(n) {
  factors = [];
  div = 2;

  if (n == 1) {
    return 0
  }

  while(n >= 2) {
    if (n % div == 0) {
      factors.push(div);
      n /= div;
    } else {
      div++;
    }
  }
  factors.sort((a, b) => a - b);
  factors.forEach(e => console.log(e)); 
}
solution(n);