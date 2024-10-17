const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [key_n, post_n] = input[0].split(' ').map(Number);
let memo = new Set(input.slice(1, key_n + 1)); 

let result = []; 

for (let i = key_n + 1; i < key_n + 1 + post_n; i++) {
  const post = input[i].split(','); 
  post.forEach(word => memo.delete(word)); 
  result.push(memo.size); 
}

console.log(result.join('\n'));