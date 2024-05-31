const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

function solution(n) {
  if (n < 10) {
    n = '0' + n;
  } else {
    n = n.toString();
  }
  let count = 0;
  let origin = n;

  while (true) {
    let n1 = n.toString().split(''); 
    let f_n = n1.reduce((acc, num) => acc + parseInt(num), 0);
    let s_n = n1[1] + f_n.toString().slice(-1);
    count++;
    
    if (s_n === origin) {
      break;
    } else n = s_n;
  }
  console.log(count); 
}
solution(n);