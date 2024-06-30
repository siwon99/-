const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString();

const lines = input.split("\n");
const data = lines[1].split(" ").map((e) => BigInt(e));

let m = 0;
 
//BigInt 내장 객체 정렬 할 때
data.sort((a, b) => (a < b ? -1 : 1));

if (data.length % 2 === 1) {
  m = data.pop();
}

while (data.length > 0) {
  const sum = data.pop() + data.shift();
  if (m < sum) {
    m = sum;
  }
}

console.log(String(m));