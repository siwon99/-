const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const lines = input.split('\n');
const words = lines.slice(1);

const dic = [...new Set(words)];
const sortedWords = dic.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(sortedWords.join('\n'));