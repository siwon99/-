let x = +require("fs").readFileSync("/dev/stdin").toString();

let dp = new Array(x + 1);

dp[1] = 0;
dp[2] = dp[1] + 1;
dp[3] = Math.min(dp[1] + 1, dp[2] + 1);

for(let i = 4; i <= x; i++) {
    if(i % 2 === 0) {
        dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1)
    }
    if(i % 3 === 0) {
        dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
    }
    if(i % 2 === 0 && i % 3 === 0) {
        dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
    }
    if(i % 2 != 0 && i % 3 != 0) {
        dp[i] = Math.min(dp[i - 1] + 1);
    }
}

console.log(dp[x]);