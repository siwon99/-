const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => v.split(" ").map(Number));

for (let i = 0; i < n; i++) {
    let A = input[i][0];
    let B = input[i][1];
    console.log((A * B / gcd(A, B)));
};

function gcd (num1, num2) {
    let temp;
    while (num2 !== 0) {
        temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    };
    return num1;
};