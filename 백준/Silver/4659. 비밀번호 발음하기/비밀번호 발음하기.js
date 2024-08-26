const fs = require('fs');
const words = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(v => v.trim());
words.pop();

function solution(word) {
  const m = /[aeiou]/;
  const threeM = /[aeiou]{3}/; // 연속된 모음
  const threeEct = /[^aeiou]{3}/; // 연속된 자음
  const double = /(.)\1/; // 같은 글자 두번 반복

  if (!m.test(word)) {
    console.log(`<${word}> is not acceptable.`);
    return;
  }
  if (threeM.test(word) || threeEct.test(word)) {
    console.log(`<${word}> is not acceptable.`);
    return;
  }
  if (double.test(word) && !/ee|oo/.test(word)) {
    console.log(`<${word}> is not acceptable.`);
    return;
  }
  console.log(`<${word}> is acceptable.`);
}

words.forEach(solution);