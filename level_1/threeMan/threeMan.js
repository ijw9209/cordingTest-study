//삼총사

//https://school.programmers.co.kr/learn/courses/30/lessons/131705


threeMan = (number) => {
     var answer = 0;
    
    for(let i = 0; i < number.length; i++) {
        for(let j = i + 1; j < number.length; j++) {
            for(let k = j+ 1; k < number.length; k++) {
                console.log(number[i], number[j], number[k]);
                
                if(number[i] + number[j] + number[k] === 0){
                    answer++;
                }
            }
        }
    }
    return answer;
}
module.exports = threeMan;


//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

