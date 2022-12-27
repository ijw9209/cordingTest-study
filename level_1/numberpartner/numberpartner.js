// 숫자 짝궁 11~15 시간초과 이슈

// https://school.programmers.co.kr/learn/courses/30/lessons/131128

numberpartner = (X, Y) => {
    var answer = '';
    
    let sameArr = [];
    let idx = 0;
    let xArr = X;
    let yStr = Y;
    
    for(let i = 0; i < xArr.length; i++) {
        
        if(yStr.indexOf(xArr[i]) === -1){
            
        }else {
            let sameIdx = yStr.indexOf(xArr[i]);
            answer += yStr[sameIdx] + '';
            // if(answer === "00") {
            //     answer = "0";
            // }
            idx++;
            yStr = yStr.replace(yStr[sameIdx] , '');
            // console.log(yStr);
        }
    }
    
    // let n_answer = Number(sameArr.sort().reverse().join(''));
    // answer.sort(function(a, b) { return b - a});
    // console.log(answer);
    // return idx === 0 ? "-1" : String(n_answer);
    return idx === 0 ? "-1" : answer.split('').sort().reverse().join('');
}

module.exports = numberpartner;

