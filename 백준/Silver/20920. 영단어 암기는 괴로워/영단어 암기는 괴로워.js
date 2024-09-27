const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1).join(' ').split(' '); 

let dic = {};  

for (let word of words) {
  if (word.length >= m) {  
    if (!dic[word]) dic[word] = 0;  
    dic[word] += 1;
  }
}

let sortedWords = Object.keys(dic).sort((a, b) => {
  if (dic[b] !== dic[a]) {  // 빈도 비교
    return dic[b] - dic[a];
  }
  if (b.length !== a.length) {  // 길이 비교
    return b.length - a.length;
  }
  return a.localeCompare(b);  // 사전 순 비교
});

console.log(sortedWords.join('\n'));