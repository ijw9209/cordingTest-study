fruteMerchant = (k, m, score) => {
    let answer = 0;
    
    score.sort(function(a, b)  {
        return b - a;
    });
    let arr = [];
    let arrIdx = 0;
    for(let i = 0; i < score.length; i++) {
        
        if(score[i] > k) {
        }else {
            
            arr[arrIdx] = score[i];
            arrIdx = arrIdx + 1;
            if(arrIdx >= m) {
                answer += Math.min(...arr) * m;
                arrIdx = 0;
                arr = [];
            }
        }
        
    }
    
    return answer;
}
module.exports = fruteMerchant;


//과일 장수

//https://school.programmers.co.kr/learn/courses/30/lessons/135808