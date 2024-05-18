function solution(n,a,b) {
    let count = 0;
    
    while(a != b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count++;
    }
    return count;
}

// for문으로 i += 2씩
// 1라운드는 8, 2라운드는 4, 3라운드는 2 처럼 / 2해주기 그리고 count++
//  