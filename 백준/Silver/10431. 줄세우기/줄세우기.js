const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0], 10);

const answer = [];

for(let i = 1; i <= T; i++) {
  const curStudents = input[i].split(' ').map(Number);
  const curNum = curStudents[0];
  let move = 0;
  const length = curStudents.slice(1);
 
  // i = 현재 학생키, j = answer에 있는 학생키
  for(let i = 1; i < 20; i++) {
    for(let j = 0; j < i; j++) {
      // 현재 학생 키가 앞선 학생들의 키보다 작다면
      if(length[j] > length[i]) {
        const current = length[i];

        // 적절한 자리로 이동시키기 위해 기존 학생들 뒤로 이동
        for(let k = i; k > j; k--) {
          length[k] = length[k - 1]; // 앞에 학생 키 복사해서 뒤로 이동시키기
          move++;
        }

        length[j] = current;
        break;
      }
    }
  }
  answer.push(`${curNum} ${move}`);
}
console.log(answer.join('\n'));