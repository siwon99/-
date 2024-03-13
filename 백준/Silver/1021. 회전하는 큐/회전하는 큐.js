const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const input1 = input[0].split(' ');
const input2 = input[1].split(' ');
const n = Number(input1[0]);
const m = Number(input1[1]);

let queue = [];
for (let i = 1; i <= n; i++) {
    queue.push(i);
}

let count = 0;
for(let i = 0; i < m; i++) {
    let target = Number(input2[i]);
    let index_size = queue.indexOf(target);
    let rotate_count = 0;

    while(target !== queue[0]) {
        if(index_size <= (queue.length / 2)) {
            let queFirst = queue.shift();
            queue.push(queFirst);
            rotate_count++;
        }
        else {
            let queLast = queue.pop();
            queue.unshift(queLast);
            rotate_count++;
        }
    }

    queue.shift();
    count += rotate_count;
}

console.log(count);