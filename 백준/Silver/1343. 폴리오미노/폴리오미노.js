const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const board = require('fs').readFileSync(filePath).toString().trim();
const b = board;

function solution(b) {
  // 정규표현식으로 변환
  let result = b.replace(/XXXX/g, 'AAAA');
  result = result.replace(/XX/g, 'BB');

  result.split('').includes('X') ? console.log(-1) : console.log(result);
}

solution(b);