const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

let array = [];
let answer = [];

for(let i = 0; i < N; i++) {
  const x = numbers[i];

    if(x === 0) {
    if(array.length === 0) {
      answer.push(0);
    } else {
      answer.push(array.shift());
    }
  } else {
    let left = 0;
    let right = array.length;

    while(left < right) {
      const mid = Math.floor((left + right) / 2);
      if(array[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    array.splice(left, 0, x);
  }
}

console.log(answer.join('\n'));