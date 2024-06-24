const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...drinks] = input;
n = n;
drinks = drinks[0].split(' ').map(i => Number(i));

function solution(n, drinks) {
    drinks.sort((a, b) => a - b);
    
    for(let i = 0; i < n - 1; i += 1) {
        const larger = drinks.pop();
        drinks.push(larger + (drinks.pop() / 2));
    }
    return drinks[0];
}

const answer = solution(n, drinks);
console.log(answer);