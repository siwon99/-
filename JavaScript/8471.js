let num1 = 28; //34 1C
let num2 = 99; //143 63

function solution1 (num1) {
    var oct = num1.toString(8);
    var hex = num1.toString(16);
    console.log("num1 8진수:", oct, ',', "num1 16진수:", hex);
}

solution1 (num1)

function solution2 (num1) {
    var oct = num2.toString(8);
    var hex = num2.toString(16);
    console.log("num2 8진수:", oct, ',', "num2 16진수:", hex);
}

solution2 (num2)