const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, d, k, coupon] = input.shift().split(" ").map(Number);
let check = Array(d + 1).fill(0);
let sushi = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  sushi[i] = Number(input.shift());
}

let cnt = 0;
let ans = 0;

for (let i = 0; i < k; i++) {
  if (check[sushi[i]] == 0) {
    cnt++;
  }

  check[sushi[i]]++;
}

ans = cnt;

for (let start = 0; start < N; start++) {
  let end = (start + k) % N; //원형 배열 처리

  if (cnt >= ans) {
    if (check[coupon] == 0) { //쿠폰 추가
      ans = cnt + 1;
    } else { //쿠폰 추가X
      ans = cnt;
    }
  }

  check[sushi[start]]--;
  if (check[sushi[start]] == 0) {
    cnt--;
  }
  if (check[sushi[end]] == 0) {
    cnt++;
  }

  check[sushi[end]]++;
}

console.log(ans);