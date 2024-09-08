const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((e) => e.split(" ").map(Number));

const T = input[0][0];
for (let i = 0; i < T; i++) {
  const n = input[3 * i + 1][0];
  let array = new Array(2);
  let dp = Array.from(Array(2), () => new Array(n + 1).fill(0));

  array[0] = input[3 * i + 2];
  array[1] = input[3 * i + 3];

  dp[0][0] = array[0][0];
  dp[1][0] = array[1][0];
  dp[0][1] = dp[1][0] + array[0][1];
  dp[1][1] = dp[0][0] + array[1][1];

  for (let j = 2; j < n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + array[0][j];
    dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + array[1][j];
  }

  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}