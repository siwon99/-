const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, t, P] = input[0].split(' ').map(Number);
const scores = input[1] ? input[1].split(' ').map(Number) : [];

if(N < P) {
  scores.push(t);
  scores.sort((a, b) => b - a);
} else { // 리스트 꽉 차면
  if(t > scores[scores.length - 1]) {
    scores[scores.length - 1] = t;
    scores.sort((a, b) => b - a);
  } else {
    console.log(-1);
    return;
  }
}


for (let i = 0; i < scores.length; i++) {
  if (scores[i] === t) {
    console.log(i + 1); 
    return;
  }
}