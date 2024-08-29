const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]); 
const arr = input[1].split(' ').map(v => +v); 

let dp = new Array(N).fill(0);
dp[0] = arr[0];  

for (let i = 1; i < N; i++) {
  dp[i] = arr[i] > dp[i - 1] + arr[i] ? arr[i] : arr[i] + dp[i - 1];
}

console.log(Math.max(...dp));