const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

function solution(N) {
  if (N % 2 === 1) {
    console.log('SK');
  } else {
      console.log('CY');
  }
}

solution(N);