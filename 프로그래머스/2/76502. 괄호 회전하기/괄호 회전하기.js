function solution(s) {
    let count = 0;
    const match = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    function isMatch(char) {
        let stack = [];
        for (let i = 0; i < char.length; i++) {
            if (char[i] === '(' || char[i] === '[' || char[i] === '{') {
                stack.push(char[i]);
            } else if (char[i] === ')' || char[i] === ']' || char[i] === '}') {
                if (stack.length == 0 || stack[stack.length - 1] !== match[char[i]]) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        let rotated = s.slice(i) + s.slice(0, i);
        if (isMatch(rotated)) {
            count++;
        }
    }
    
    return count;
}