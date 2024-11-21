const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const queue = [[n, 0]];
const visited = Array(100001).fill(false);

while (queue.length) {
  const [current, cnt] = queue.shift();

  if (visited[current]) {
    continue;
  }

  visited[current] = true;

  if (current === k) {
    console.log(cnt);
    break;
  }

  for (let next of [current + 1, current - 1, current * 2]) {
    if (!visited[next] && next >= 0 && next <= 100000) {
      queue.push([next, cnt + 1]);
    }
  }
}