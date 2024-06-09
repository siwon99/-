const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [n, k] = [Number(input[0]), Number(input[1])];

let arr = [];
let count = 0;

for(let i = 0; i <= n; i++){
    arr.push(i);
}

function solution(){
    for(let i = 2; i <= n; i++){
        for(let j = i; j <= n; j += i){
            if(arr[j] == 0) continue;
            arr[j] = 0;
            count += 1;
            if(count == k){
                console.log(j);
                return;
            }
        }
    }
}
solution();