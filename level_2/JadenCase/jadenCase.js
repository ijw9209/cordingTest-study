jadenCase = (s) => {
    let arr = [];
    //문자열을 배열로 담아버림
    arr = s.split(' ');
    
    const answerArr = [];
    
    for(let i = 0; i < arr.length; i++ ){
        
        let str = arr[i];
        
        //첫 문자를 charAt 함수로 first 변수에 담는다.
        let first = arr[i].charAt(0);
        //나머지 글자를 rest에 담음
        let rest = arr[i].slice(1);
    
        
        //첫 글자가 숫자일 때
        //첫 글자가 대문자일 때
        //첫 글자가 소문자일 때
        if(!isNaN(first)) {
            answerArr[i] = str.toLowerCase();   
        }else if (first === first.toUpperCase() && typeof(first) === "string") {
            answerArr[i] = first + rest.toLowerCase();
        }else {
            answerArr[i] = first.toUpperCase() + rest.toLowerCase();
        }
    }

    return answerArr.join(' ');
}
module.exports = jadenCase;
