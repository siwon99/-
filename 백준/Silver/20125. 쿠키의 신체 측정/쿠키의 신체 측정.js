const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const cookie = [];
for (let i = 0; i < N; i++) {
  cookie.push(input[i].split(''));
}

let heart_x = 0;
let heart_y = 0;

let head = 0;
let left_arm = 0;
let right_arm = 0;
let left_leg = 0;
let right_leg = 0;
let waist = 0;

// 머리, 심장 찾기
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    // 머리발견
    if(cookie[i][j] == "*") { 
      head = 1; //머리, 심장 발견
      heart_x = i + 1;
      heart_y = j;
      console.log((heart_x + 1) + ' ' + (heart_y + 1));
      break;
    }
  }
  // 심장 찾았으면 종료
  if (head) { 
    break;
  }
}

// 왼팔 찾기
for (let j = 0; j < heart_y; j++) {
  if (cookie[heart_x][j] === "*") {
    left_arm++;
  }
}

// 오른팔 찾기
for (let j = heart_y + 1; j < N; j++) {
  if (cookie[heart_x][j] === "*") {
    right_arm++;
  }
}

// 허리 찾기
// 심장 아래부터 허리
for (let i = heart_x + 1; i < N; i++) {
  if (cookie[i][heart_y] === "*") {
    waist++;
  } else {
    break; 
  }
}

// 왼쪽 다리 찾기
// 허리 아래부터 왼쪽 다리
if (heart_y > 0) {
  for (let i = heart_x + waist + 1; i < N; i++) {
    if (cookie[i][heart_y - 1] === "*") {
      left_leg++;
    } else {
      break; 
    }
  }
}

// 오른쪽 다리 찾기
// 허리 아래부터 오른쪽 다리
if (heart_y < N - 1) {
  for (let i = heart_x + waist + 1; i < N; i++) {
    if (cookie[i][heart_y + 1] === "*") {
      right_leg++;
    } else {
      break;
    }
  }
}

console.log(left_arm + ' ' + right_arm + ' ' + waist + ' ' + left_leg + ' ' + right_leg);