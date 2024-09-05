const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = input.shift(); // 6
const arr = input; // [6, 10, 13, 9, 8, 1]

let dp = [...arr];

dp[0] = arr[0];
if(n > 1) {
  dp[1] = arr[0] + arr[1];
}
if(n > 2) {
  dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2], dp[1]);
}

for(let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[n - 1]);