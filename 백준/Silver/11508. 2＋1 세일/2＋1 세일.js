const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

let n = null;
let count = 0;
let tot = 0;
let free = 0;
const price = [];

rl.on("line", (line) => {
  if (n == null) {
    n = parseInt(line, 10);
  } else {
    price.push(parseInt(line, 10));
    count += 1;
  }
  if (n == count) {
    price.sort((a, b) => b - a);

    for(let i = 2; i < n; i += 3) {
      free += price[i];
    }

    for(let i = 0; i < n; i++) {
      tot += price[i];
    }
    console.log(tot - free);
    process.exit();
  }
})