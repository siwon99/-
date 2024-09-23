const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let m = parseInt(input[1]);
let lights = input[2].split(' ').map(Number);

let last = lights[0];
let heights = lights[0];

for (let i = 1; i < lights.length; i++) {
   // 현재 가로등과 이전 가로등 사이 거리 계산
  let cnt = Math.abs(last - lights[i]);

  if (cnt % 2 === 0) {
    cnt = cnt / 2;
  } else {
    cnt = Math.floor(cnt / 2) + 1;
  }

  heights = Math.max(heights, cnt);
  last = lights[i];
}
let distance = Math.abs(n - lights[lights.length - 1]);
heights = Math.max(heights, distance);

console.log(heights);