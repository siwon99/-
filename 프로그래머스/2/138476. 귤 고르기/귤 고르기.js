function solution(k, tangerine) {
    let ans = 0;
    let arr = {}
    
    tangerine.forEach((el) => (arr[el] = (arr[el] || 0) + 1));
    let freqArr = Object.values(arr).sort((a, b) => b - a);
    
    for (const i of freqArr) {
        ans++;
        if (k > i) {
            k -= i;
        } else break;
    }
    return ans;
}