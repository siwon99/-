function solution(progresses, speeds) {
  const answer = [];
  let maxDay = 0;

  for (let i = 0; i < progresses.length; i++) {
      const result = Math.ceil((100 - progresses[i]) / speeds[i])
    if (result <= maxDay) {
      answer[answer.length - 1]++;
    } else {
      maxDay = result;
      answer.push(1);
    }
  }
  return answer;
}