const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ');
N = parseInt(N);

let count = 0;
let game = {};
let sum = 0;
if (M === 'Y') sum = 1;
else if (M === 'F') sum = 2;
else sum = 3;

for(let i = 1; i <= N; i++) {
  let val = input[i].trim();
  if(!game[val]) {
    game[val] = true;
    count++;
  }
}

console.log(Math.floor(count / sum));