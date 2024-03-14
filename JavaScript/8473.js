let str1 = 'abcdefghijklmnopqrstuvwxyz' // I
let str2 = 'ABC' // P

function solution1 (str1) {
    for(let i = 0; i < str1.length; i++) {
        if(str1.length > 20) {
            console.log('ID 가능 여부:','I')
            break;
        } else {
            console.log('ID 가능 여부:','P')
            break;
        }
    }
}
solution1 (str1)

function solution2 (str2) {
    for(let i = 0; i < str2.length; i++) {
        if(str2.length > 20) {
            console.log('ID 가능 여부:','I')
            break;
        } else {
            console.log('ID 가능 여부:','P')
            break;
        }
    }
}
solution2 (str2)