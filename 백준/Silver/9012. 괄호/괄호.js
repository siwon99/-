let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const vps = input[0];

for (let i = 1; i <= vps; i++) {
    const cases = input[i];
    const stack = [];
    let ans = 'YES';
  
    for (let j = 0; j < cases.length; j++) { 
        if (cases[j] === '(') {
            stack.push(1);
        } else {
            if (!stack.pop()) {
                ans = 'NO';
                break;
            } 
        }
    }
  
    if (stack.length !== 0) {
        ans = 'NO';
    }
  
    console.log(ans);
}