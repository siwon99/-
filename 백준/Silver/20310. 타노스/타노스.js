const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const S = input[0];

let cntZero = 0;
let cntOne = 0;
let answer = [];

for(let i = 0; i < S.length; i++) {
  if(S[i] === '0') cntZero += 1;
  else cntOne += 1;
}

cntZero = Math.floor(cntZero / 2);
cntOne = Math.floor(cntOne / 2);

for(let i = 0; i < cntZero; i++) {
  answer.push('0');
}
for(let i = 0; i < cntOne; i++) {
  answer.push('1');
}

console.log(answer.join(''));