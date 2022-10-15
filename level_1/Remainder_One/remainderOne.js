//나머지가 1이 되는 수 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/87389

remainderOne = (n) => {
    //나머지가 1이되는 수 배열
    const arr = [];
    //인덱싱 나눠서 1이되는 수가 존재할때만 증가
    let idx = 0;
    for(let x = 0; x < n; x++){
        
        if(n % x === 1) {
            arr[idx] = x;
                idx++;
        }
    }
    
    //가장 작은 수
    return Math.min(...arr);
}
module.exports = remainderOne;
