//나머지가 1이 되는 수 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/87389

remainderOne = (n) => {
    //최소 값을 담을 변수    
    let min = 0;
        
    for(let x = 0; x < n; x++){
        
        if(n % x === 1) {
            min = x;
            break;
        }
    }
    
    //가장 작은 수
    return min;
}
module.exports = remainderOne;
