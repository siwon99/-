const fs = require('fs');
let [n, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

function solution(n, nums) {
  let price = nums.shift();
  nums.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if(price < nums[i]) {
      continue;
    } else {
      let val = Math.floor(price / nums[i]);
      price -= val * nums[i];
      sum += val;

      if (price === 0) {
        break;
      }
    }
  }
  console.log(sum)
}

solution(n, nums);