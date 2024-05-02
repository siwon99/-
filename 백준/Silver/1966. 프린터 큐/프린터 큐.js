const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...array] = input;
arr = array.map(el => el.split(' ').map(Number));
let number = '';

for(let i = 0; i < arr.length; i += 2) {
  let count = 0; // 총 횟수 
  let important = arr[i + 1];
  let order = parseInt(arr[i][1]); // 궁금한 문서 위치
  
  while(true) {
    const max = Math.max(...important); // 중요도 가장 높은 문서
    const target = important.shift(); // 궁금한 문서
    if(target === max) {
      count += 1;
      if(order === 0) {
        number += count + '\n';
        break;
      }
    } else {
      important.push(target);
    }
    
    if(order === 0) {
      order = important.length - 1;
    } else {
      order--;
    }
  }

}
console.log(number.trim());