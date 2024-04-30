const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const nums = input[1].split(' ').map(num => Number(num));

function solution(n, nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  // n개수만큼 array만들기
  for(let i = 0; i < n; i++) {
    let arr = new Array();

    // 각 숫자의 공약수 구하기
    for(let j = 1; j <= nums[i]; j++) {
      if(nums[i] % j === 0) {
        arr.push(j);
      }
    }
    ans.push(arr);
    
  }
  // 각 숫자의 공약수 중 같은 숫자만 빼서 출력하기
  let common = ans[0]
  for(let i = 1; i < ans.length; i++) {
    common = common.filter(e => ans[i].includes(e));
  }

  // 중복 값 제거
  common = Array.from(new Set(common));

  // 한 줄에 하나씩 출력
  common.forEach(num => console.log(num)); 
}
solution(n, nums);