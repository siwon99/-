const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

// 보드판
const boards = input.map((v) => v.split(""));
const R = {};
const B = {};
const O = {};

// 초기 R, B, O 위치 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (boards[i][j] === 'R') {
      R.x = i;
      R.y = j;
      boards[i][j] = ".";
    }
    if (boards[i][j] === 'B') {
      B.x = i;
      B.y = j;
      boards[i][j] = ".";
    }
    if (boards[i][j] === 'O') {
      O.x = i;
      O.y = j;
    }
  }
}

// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = [];
queue.push({ R, B, count: 0 });
let visited = new Set();
visited.add(`${R.x},${R.y},${B.x},${B.y}`);

let answer = -1;

// BFS 최단 경로
while (queue.length > 0 && answer === -1) {
  const { R, B, count } = queue.shift();

  if (count >= 10) break;

  for (let i = 0; i < 4; i++) {
    let nrx = R.x;
    let nry = R.y;
    let nbx = B.x;
    let nby = B.y;

    let rInHole = false;
    let bInHole = false;

    // 빨간 구슬 이동
    while (boards[nrx + dx[i]][nry + dy[i]] !== "#" && !(nrx === O.x && nry === O.y)) {
      nrx += dx[i];
      nry += dy[i];
      if (nrx === O.x && nry === O.y) {
        rInHole = true;
        break;
      }
    }

    // 파란 구슬 이동
    while (boards[nbx + dx[i]][nby + dy[i]] !== "#" && !(nbx === O.x && nby === O.y)) {
      nbx += dx[i];
      nby += dy[i];
      if (nbx === O.x && nby === O.y) {
        bInHole = true;
        break;
      }
    }

    // 파란 구슬이 구멍에 빠졌다면 무시
    if (bInHole) continue;

    // 빨간 구슬만 구멍에 빠졌다면 종료
    if (rInHole) {
      answer = count + 1;
      break;
    }

    // 두 구슬의 위치가 겹친다면, 더 많이 움직인 구슬을 뒤로 한 칸 이동
    if (nrx === nbx && nry === nby) {
      if (Math.abs(nrx - R.x) + Math.abs(nry - R.y) > Math.abs(nbx - B.x) + Math.abs(nby - B.y)) {
        nrx -= dx[i];
        nry -= dy[i];
      } else {
        nbx -= dx[i];
        nby -= dy[i];
      }
    }

    if (!visited.has(`${nrx},${nry},${nbx},${nby}`)) {
      visited.add(`${nrx},${nry},${nbx},${nby}`);
      queue.push({ R: { x: nrx, y: nry }, B: { x: nbx, y: nby }, count: count + 1 });
    }
  }
}

console.log(answer);