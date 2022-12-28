// 숫자 짝궁 11~15 시간초과 이슈

// https://school.programmers.co.kr/learn/courses/30/lessons/131128

numberpartner = (X, Y) => {
   
    var answer = '';
    
    let xArr = X.split('' ).sort();
    let yArr = Y.split('').sort();
    
    for(let i = 0; i <= 9; i++){
        let xCount = X.split(i).length - 1;
        let yCount = Y.split(i).length - 1;
        xArr[i] = xCount;
        yArr[i] = yCount;
        
    }
    
    let sameCnt = 0;
    
    for(let j = 9; j >= 0; j--) {
        
        if(xArr[j] > 0 && yArr[j] > 0) {
            cnt = Math.min(xArr[j], yArr[j]);
            sameCnt++;
            while(cnt > 0){
                
                answer += j;
                cnt--;
            }
        }
    }
    
    if(sameCnt === 0) {
      answer = "-1";   
    }
    
    
    return (answer[0] === "0") ? "0" : answer;
   
    // ===============이전풀이 시간복잡도 탈락 =========////////
   
    // var answer = '';
    
    // let sameArr = [];
    // let idx = 0;
    // let xArr = X;
    // let yStr = Y;
    
    // for(let i = 0; i < xArr.length; i++) {
        
    //     if(yStr.indexOf(xArr[i]) === -1){
            
    //     }else {
    //         let sameIdx = yStr.indexOf(xArr[i]);
    //         answer += yStr[sameIdx] + '';
    //         // if(answer === "00") {
    //         //     answer = "0";
    //         // }
    //         idx++;
    //         yStr = yStr.replace(yStr[sameIdx] , '');
    //     }
    // }
    
    // return idx === 0 ? "-1" : answer.split('').sort().reverse().join('');
}

module.exports = numberpartner;

