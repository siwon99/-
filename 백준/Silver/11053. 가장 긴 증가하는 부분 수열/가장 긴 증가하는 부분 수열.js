const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

let dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for(let j = 0; j < i; j++) {
    if(arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const x = Math.max(...dp);

console.log(x);