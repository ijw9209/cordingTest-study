//중복된 숫자 개수

//https://school.programmers.co.kr/learn/courses/30/lessons/120583

overlapNum = (array, n) => {
    var answer = 0;
    
    array.map(item => {
        console.log(item);
        if(item === n)
            answer++;
    })
    return answer;
}
module.exports = overlapNum;
