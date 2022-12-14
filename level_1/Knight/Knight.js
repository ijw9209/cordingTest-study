function Knight(number, limit, power) {
    var answer = 0;
    
    //약수의개수 = 공격력
    const arr = [];
    
    //약수의 개수
    for(let i = 1; i <= number; i++) {
        let cnt = 0;
        for(let j = 1; j * j <= i; j++) {
            if(i % j === 0){
                cnt++;
                if (j * j < i) {
                    cnt++;
                }
            }
            // console.log('j' + j)
        }
        // console.log('i' + i)
        
        answer += (cnt > limit) ? power : cnt;
    }
    
    return answer;
}
module.exports = Knight;


//기사단원의 무기

//https://school.programmers.co.kr/learn/courses/30/lessons/136798
