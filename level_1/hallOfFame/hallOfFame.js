function hallOfFame(k, score) {
    var answer = [];
    const topArr = [];
    
    for(let i = 0; i < score.length; i++) {
        
        if(i === 0) {
            topArr.push(score[i]);
            answer.push(score[i]);
        }else{
            topArr.push(score[i]);
            topArr.sort((a,b)=>a-b);
            
            if(topArr.length > k){
                topArr.shift()
                answer.push(topArr[0])
            }else{
                answer.push(topArr[0])
            }
            
        }
    }
    
    return answer;
}
module.exports = hallOfFame;


//명예의 전당

//https://school.programmers.co.kr/learn/courses/30/lessons/138477
