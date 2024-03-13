const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

const [n, k] = input.split(' ').map(Number);

let ans = [];
let curIndex = 0;

let queue = Array.from({ length: n }, (_, index) => index);

while (queue.length > 0) {
    curIndex = (curIndex + k - 1) % queue.length;
    ans.push(queue[curIndex] + 1);
    queue.splice(curIndex, 1);
}

console.log(`<${ans.join(', ')}>`);