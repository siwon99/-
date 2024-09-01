const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const N = input.shift()[0];
const arr = input[0];

let dp = [...arr];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + arr[i]);
        }
    }
}

const sum = Math.max(...dp);
console.log(sum);