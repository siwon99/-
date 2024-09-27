const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const t = parseInt(input[0]);
let index = 1;

for (let i = 0; i < t; i++) {
  const n = parseInt(input[index++]);
  const team = input[index++].split(' ').map(Number);
  const manage = {};

  for (let j = 0; j < n; j++) {
    if (!manage[team[j]]) {
      manage[team[j]] = [1, [], 0];
    } else {
      manage[team[j]][0] += 1;
    }
  }

  // 6인 이하 제외
  const contain = new Set();
  for (const [key, value] of Object.entries(manage)) {
    if (value[0] < 6) {
      contain.add(parseInt(key));
    }
  }

  let grade = 1;
  for (let j = 0; j < n; j++) {
    if (!contain.has(team[j])) {
      manage[team[j]][1].push(grade);
      if (manage[team[j]][1].length <= 4) {
        manage[team[j]][2] += grade;
      }
      grade += 1;
    }
  }

  const answer = [];
  for (const [key, value] of Object.entries(manage)) {
    if (value[1].length !== 0 && value[2] !== 0) {
      answer.push([parseInt(key), value[1][4], value[2]]);
    }
  }

  answer.sort((a, b) => {
    if (a[2] === b[2]) {
      return a[1] - b[1];
    }
    return a[2] - b[2];
  });

  console.log(answer[0][0]);
}