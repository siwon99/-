let num1 = 37 // 2
let num2 = 9995 // 6

function solution1 (num1) {
    let fiv = num1 % 5;
    let sev = num1 % 7;

    if( fiv > sev) {
        console.log('나머지가 더 큰 값은:', fiv)
    } else {
        console.log('나머지가 더 큰 값은:', sev)
    }
}
solution1 (num1)

function solution1 (num2) {
    let fiv = num2 % 5;
    let sev = num2 % 7;

    if( fiv > sev) {
        console.log('나머지가 더 큰 값은:', fiv)
    } else {
        console.log('나머지가 더 큰 값은:', sev)
    }
}
solution1 (num2)