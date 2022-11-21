//최소직사각형

// https://school.programmers.co.kr/learn/courses/30/lessons/86491
minRectangle = (sizes) => {
    let widthMax = 0;
    let heightMax = 0;
    //큰값과 작은 값을 찾음
    
    for(let i = 0; i < sizes.length; i++) {
        
        //정렬 가로 세로 돌리기
        let sortArr = sizes[i].sort((a,b) => { return b - a     });
        
        //돌린 값의 가로의 제일 큰 값
        if(widthMax < sortArr[0]) {
            widthMax = sortArr[0];
        }
        //돌린 값의 세로의 제일 큰 값
        if(heightMax < sortArr[1]) {
            heightMax = sortArr[1];
        }
    }
    
    return widthMax * heightMax;
}
module.exports = minRectangle;

