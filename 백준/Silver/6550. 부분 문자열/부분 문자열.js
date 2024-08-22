const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const string = input.map((i) => i.split(" "));

for (let i = 0; i < string.length; i++) {
  const s = string[i][0];
  const t = string[i][1];
  
  const arr = s.split("");

  for(el of t) {
    if(el === arr[0]) {
      arr.shift();
    }
  }
  console.log(arr.length === 0 ? "Yes" : "No");
}