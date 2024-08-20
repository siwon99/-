const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  let [n, m] = input.shift().split(' ').map(Number);
  let inputParted = input.map(v => v.split(''));
  let red = [];
  let blue = [];
  let o = [];
  let ans = -1;

  // R, B, O의 초기 좌표 확인
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (inputParted[i][j] === 'R') {
        red = [i, j];
        inputParted[i][j] = '.'; // 초기 좌표를 확인한 후 '.'으로 변경
      }
      if (inputParted[i][j] === 'B') {
        blue = [i, j];
        inputParted[i][j] = '.'; // 초기 좌표를 확인한 후 '.'으로 변경
      }
      if (inputParted[i][j] === 'O') {
        o = [i, j]; // 구멍의 좌표 저장
      }
    }
  }

  let dirX = [0, 1, 0, -1];
  let dirY = [1, 0, -1, 0];
  const queue = [[...red, ...blue, 0]];
  const visited = new Set();
  visited.add(`${red[0]},${red[1]},${blue[0]},${blue[1]}`); // 초기 상태를 방문 처리

  while (queue.length && ans === -1) {
    const [rx, ry, bx, by, cnt] = queue.shift();

    // 최대 10번 시도
    if (cnt >= 10) break;

    for (let j = 0; j < 4; j++) {
      let newRx = rx, newRy = ry;
      let newBx = bx, newBy = by;

      let rHole = false, bHole = false;

      // 빨간 구슬 이동
      while (inputParted[newRx + dirX[j]][newRy + dirY[j]] !== '#') {
        newRx += dirX[j];
        newRy += dirY[j];
        if (newRx === o[0] && newRy === o[1]) {
          rHole = true; 
          break;
        }
      }

      // 파란 구슬 이동
      while (inputParted[newBx + dirX[j]][newBy + dirY[j]] !== '#') {
        newBx += dirX[j];
        newBy += dirY[j];
        if (newBx === o[0] && newBy === o[1]) {
          bHole = true;
          break;
        }
      }

      // 파란 구슬이 구멍에 빠졌다면 실패 (이 방향은 무시)
      if (bHole) continue;

      // 빨간 구슬만 구멍에 빠졌다면 정답
      if (rHole) {
        ans = cnt + 1;
        break;
      }

      // 두 구슬이 겹쳤을 경우 처리
      if (newRx === newBx && newRy === newBy) {
        if (Math.abs(newRx - rx) + Math.abs(newRy - ry) > Math.abs(newBx - bx) + Math.abs(newBy - by)) {
          newRx -= dirX[j]; 
          newRy -= dirY[j];
        } else {
          newBx -= dirX[j]; 
          newBy -= dirY[j];
        }
      }

      const key = `${newRx},${newRy},${newBx},${newBy}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([newRx, newRy, newBx, newBy, cnt + 1]);
      }
    }
  }

  return ans;
};

console.log(solution(input));
