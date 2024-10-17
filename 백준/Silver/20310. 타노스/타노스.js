const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num0 = 0;
let num1 = 0;
let sb = [...input]; 

for (const c of sb) {
  if (c === '0') num0++;
  else num1++;
}

num0 = Math.floor(num0 / 2);
num1 = Math.floor(num1 / 2);

for (let i = 0; i < sb.length; i++) {
  if (sb[i] === '1') {
    sb[i] = '2'; 
    num1--;
  }
  if (num1 === 0) break;
}

for (let i = sb.length - 1; i >= 0; i--) {
  if (sb[i] === '0') {
    sb[i] = '2'; 
    num0--;
  }
  if (num0 === 0) break;
}

const result = sb.filter((c) => c === '0' || c === '1').join('');
console.log(result);