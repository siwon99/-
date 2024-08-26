const fs = require('fs');
const words = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(v => v.trim());
words.pop(); //end 삭제

function solution(words) {
  for(let i = 0; i < words.length; i++) {
    let vcount = 0; // 모음 연속 체크
    let lcount = 0; // 자음 연속 체크
    let includeVcheck = false; // 모음 포함 여부
    let countCheck = true; // 3개 연속 체크
    let eoCheck = true; // ee와 oo만 허용

    let v = ['a', 'e', 'i', 'o', 'u'];
    for(let j = 0; j < words[i].length; j++) {
      if(v.includes(words[i][j])) {
        includeVcheck = true;
        vcount++;
        lcount = 0;
      } else {
        vcount = 0;
        lcount++;
      }

      if(vcount === 3 || lcount === 3) {
        countCheck = false;
      }

      if(words[i][j] === words[i][j + 1] && words[i][j] !== 'e' && words[i][j] !== 'o') {
          eoCheck = false;
      }
    }
    if(includeVcheck && countCheck && eoCheck) {
      console.log(`<${words[i]}> is acceptable.`);
    } else {
      console.log(`<${words[i]}> is not acceptable.`);
    }
  }
}

solution(words);