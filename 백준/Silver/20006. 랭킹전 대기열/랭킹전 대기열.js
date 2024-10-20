const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 플레이어 수, 정원
const [p, m] = input[0].split(' ').map(Number);

// 레벨, 닉네임
const players = input.slice(1).map(line => {
  const [i, n] = line.split(' ');
  return { level: Number(i), nickname: n };
});

let rooms = [];

for(const player of players) {
  let place = false;

  for(let room of rooms) {
    const targetLevel = room[0].level;
    if(room.length < m && Math.abs(targetLevel - player.level) <= 10) {
      room.push(player);
      place = true;
      break;
    }
  }

  // 새 방 생성
  if(!place) {
    rooms.push([player]);
  }
}

for(const room of rooms) {
  const game = (room.length === m) ? "Started!" : "Waiting!";
  console.log(game);

  room.sort((a, b) => a.nickname.localeCompare(b.nickname));

  for (const { level, nickname } of room) {
    console.log(level, nickname);
  }
}