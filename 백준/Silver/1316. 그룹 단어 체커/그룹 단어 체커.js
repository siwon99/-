const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0].trim());
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const visit = [];
  let flag = true;

  for (let j = 0; j < word.length; j++) {
    const char = word[j];
    if (!visit.includes(char)) {
      visit.push(char);
    } else if (char !== word[j - 1]) {
      flag = false;
      break;
    }
  }
  if (flag) count++;
}

console.log(count);