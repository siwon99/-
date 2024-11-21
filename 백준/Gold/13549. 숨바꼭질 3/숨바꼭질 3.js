const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const visited = Array(100001).fill(false); 
const deque = [[n, 0]]; 

while (deque.length) {
  const [current, time] = deque.shift(); 

  if (visited[current]) continue; 
  visited[current] = true; 

  if (current === k) { 
    console.log(time);
    break;
  }

  if (current * 2 <= 100000 && !visited[current * 2]) {
    deque.unshift([current * 2, time]);
  }

  for (let next of [current - 1, current + 1]) {
    if (next >= 0 && next <= 100000 && !visited[next]) {
      deque.push([next, time + 1]);
    }
  }
}