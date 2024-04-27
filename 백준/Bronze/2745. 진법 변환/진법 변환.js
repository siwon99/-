const fs = require("fs");
let [N, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(N, B){
  // 36진수 => 10진수 parseInt('ZZZZZ', 36)
  console.log(parseInt(N , B));
}

solution(N, B);