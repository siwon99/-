const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const cnt = input.shift();

let n = 0;
function factorial(n){
    if(n <= 1) { //1! = 1, 0! = 1
      return 1;
    } else { // n! x (n-1)!
      return n * factorial(n - 1);
    }
}

for(let i = 0 ; i < cnt; i++){
    const arr = input[i].split(' ');
    const N = parseInt(arr[0]);
    const M = parseInt(arr[1]);
    // C(M, N) = M! / (N! x (M - N)!)
    let answer = Math.round(factorial(M) / (factorial(M - N) * factorial(N)));
    console.log(answer);   
}