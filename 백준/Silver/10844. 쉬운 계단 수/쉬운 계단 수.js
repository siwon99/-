const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10); 

const dp = Array.from(Array(N + 1), () => Array(10).fill(0));

let MOD = 1000000000;

// 길이 1인 계단 수 초기화
for (let i = 1; i <= 9; i++) { 
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) {
      dp[i][j] += dp[i - 1][j - 1];
    }
    if (j < 9) {
      dp[i][j] += dp[i - 1][j + 1];
    }
    dp[i][j] %= MOD;
  }
}

let answer = 0;
for (let i = 0; i <= 9; i++) {  
  answer = (answer + dp[N][i]) % MOD;
}

console.log(answer);