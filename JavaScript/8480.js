let num1 = 5630 // 6
let num2 = 102830 // 11

function solution1 (num1) {
    let coupon = [10, 50, 100, 500, 1000, 5000, 10000, 50000].reverse()
    let sum = 0

    for (let i = 0; i < coupon.length; i++) {
        sum += Math.floor(num1 / coupon[i]);
        num1 = num1 % coupon[i];
    }
    console.log(sum);
}
solution1 (num1);

function solution1 (num2) {
    let coupon = [10, 50, 100, 500, 1000, 5000, 10000, 50000].reverse()
    let sum = 0

    for (let i = 0; i < coupon.length; i++) {
        sum += Math.floor(num2 / coupon[i]);
        num2 = num2 % coupon[i];
    }
    console.log(sum);
}
solution1 (num2);