const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const num = input[1].split(' ').map(Number);

const answer = Array.from({ length: n }, () => []);

function Tree(arr, level) {
    if (arr.length === 0) {
        return;
    }
    const node = Math.floor(arr.length / 2);
    const left = arr.slice(0, node);
    const right = arr.slice(node + 1);

    answer[level].push(arr[node]);

    Tree(left, level + 1);
    Tree(right, level + 1);
}

Tree(num, 0);
console.log(answer.map(v => v.join(' ')).join('\n'));