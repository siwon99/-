const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...colors] = input;
n += n;
colors = colors[0];

function solution(n, colors) {
  let answer = 1;
  const blue = colors.split('R').filter(i => i).length;
  const red = colors.split('B').filter(i => i).length;
  const larger = blue > red ? 'B' : 'R';
  const split = colors.split(larger);
  split.forEach(string => { if (string) answer += 1;});

  return answer;
}

const answer = solution(n, colors);
console.log(answer);