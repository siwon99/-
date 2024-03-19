let num1 = 4 //dong, back, pang
let student1 = [['jung', 51], ['dong', 160],['back', 120], ['pang', 89]]

let num2 = 7 //jang, kwan, hani
let student2 = [['jang', 180], ['nana', 125],['min', 125], ['hani', 142], ['kwan', 170], ['hyun', 97], ['jack', 86]]

function solution1 (num1, student1) {
    let ans = new Array(num1);
    for(let i = 0; i < student1.length; i++) {
        student1 = [...student1].sort((a, b) => b[1] - a[1]);
        student1 = student1.slice(0, 3)
        console.log(student1[i][0])
    }
}
solution1 (num1, student1)

function solution1 (num2, student2) {
    let ans = new Array(num2);
    for(let i = 0; i < student2.length; i++) {
        student2 = [...student2].sort((a, b) => b[1] - a[1]);
        student2 = student2.slice(0, 3)
        console.log(student2[i][0])
    }
}
solution1 (num2, student2)