const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
let switchs = input[1].split(' ').map(Number);
const m = Number(input[2]);

let students = [];
for (let i = 0; i < m; i++) {
    let studentInfo = input[3 + i].split(' ').map(Number);
    students.push(studentInfo);
}

for (let i = 0; i < m; i++) {
  const gender = students[i][0];
  const num = students[i][1];

  if (gender === 1) { // 남학생
      for (let j = num; j <= n; j += num) {
          switchs[j - 1] = switchs[j - 1] === 1 ? 0 : 1;
      }
  } else if (gender === 2) { // 여학생
      let idx = num - 1;

      switchs[idx] = switchs[idx] === 1 ? 0 : 1;
      for (let j = 1; idx - j >= 0 && idx + j < n; ++j) {
          if (switchs[idx - j] === switchs[idx + j]) {
              switchs[idx - j] = switchs[idx - j] === 1 ? 0 : 1;
              switchs[idx + j] = switchs[idx + j] === 1 ? 0 : 1;
          } else {
              break;
          }
      }
  }
}

let result = '';
for (let i = 0; i < n; i++) {
  result += switchs[i] + ' ';
  if ((i + 1) % 20 === 0) {
      result += '\n';
  }
}
console.log(result.trim());