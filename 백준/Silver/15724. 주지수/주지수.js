let input = require("fs").readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));
const k = input[n + 1];
const arr = input.slice(n + 2).map(str => str.split(' ').map(Number));
let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

// 누적 합
for(let i = 1; i <= n; i++) {
  for(let j = 1; j <= m; j++) {
    dp[i][j] = board[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

let answer = " ";

// 인구 수 합
for (let i = 0; i < k; i++) {
  const [x1, y1, x2, y2] = arr[i];
  let sum = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  answer += sum + '\n';
}
console.log(answer.trim());