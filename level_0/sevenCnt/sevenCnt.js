//7의 개수

//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

sevenCnt = (array) => {
    var answer = 0;
    for(let i = 0; i < array.length; i++) {
        let str = String(array[i]);
        for(let j = 0; j < str.length; j++) {
            if(str[j] === "7") 
                answer++;
        }
    }
    return answer;
}
module.exports = sevenCnt;
