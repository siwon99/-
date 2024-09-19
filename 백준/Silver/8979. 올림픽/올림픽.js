const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const medal = input.slice(1).map((e) => e.split(' ').map(Number));

medal.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else if (b[2] !== a[2]) {
      return b[2] - a[2];
    } else {
      return b[3] - a[3];
    }
});

let k = medal.findIndex((e) => e[0] === K);

for (let i = 0; i < N; i++) {
    if (JSON.stringify(medal[k].slice(1)) === JSON.stringify(medal[i].slice(1))) {
        console.log(i + 1);
        break;
    }
}