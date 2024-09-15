const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());

let answer = [];
for (let i = 0; i < N; i++) {
  let temp = input[i].split(' ').map(Number);
  answer.push(temp);
}

for(let i = 0; i < N; i++) { 
  let cnt = 0;
  for(let j = 0; j < N; j++) { 
    if(answer[i][0] < answer[j][0] && answer[i][1] < answer[j][1]) { 
      cnt++;
    }
  }
  console.log(cnt + 1);
}