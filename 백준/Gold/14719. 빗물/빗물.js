let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const height = +input[0][0];
input = input[1].split(' ').map(Number);

let answer = 0;

for (let i = 1; i < input.length; i++) {
  let left = -1;
  let right = -1;
  let min = 0;
  let sum = 0;

  //왼쪽에서 시작
  for (let j = i; j >= 0; j--) {
    left = Math.max(left, input[j]);
  }

  //오른쪽에서 시작
  for (let j = i; j < input.length; j++) {
    right = Math.max(right, input[j]);
  }

  min = Math.min(left, right);
  sum += min - input[i]; //최소 기둥에서 현재 기둥 값 빼기
  answer += sum;
}

console.log(answer);