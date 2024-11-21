const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const N = input.length;
const Acnt = input.match(/a/g)?.length;
input += input.slice(0, Acnt - 1);
let min = Infinity;

for (let i = 0; i < N; i++) {
    const substring = input.slice(i, i + Acnt);
    min = Math.min(min, substring.match(/b/g)?.length || 0);
}
console.log(min);