const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const city = Number(input.shift());
const road = input.shift().split(" ").map(BigInt);
const oil = input.shift().split(" ").map(BigInt);

function solution(city, road, oil) {
  let price = oil[0];
  let sum = 0n;
  
  for(let i = 0; i < city - 1; i++) {
    sum += price * road[i];

    if(price > oil[i + 1]) {
      price = oil[i + 1];
    }
  }
  console.log(String(sum));
}

solution(city, road, oil);