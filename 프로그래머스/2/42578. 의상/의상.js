function solution(clothes) {
    let clothesMap = {};
    let sum = 1;
    
    clothes.forEach((v) => (clothesMap[v[1]] = (clothesMap[v[1]] || 0) + 1));
                    
    for(let i in clothesMap) {
        sum *= clothesMap[i] + 1;
    }
    return sum - 1;
}