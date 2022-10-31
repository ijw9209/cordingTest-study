//프로그래머스 문자열안에 문자열

//문자열 str1, str2가 매개변수로 주어집니다. 
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

stringPush = (A, B) => {

    let arr = A.split('');
    let cnt = 0; 
    
    //반복
    for(let i = 0; i < A.length; i++) {
        
        //A와 B가 시작부터 같은경우
        if(A === B) {
            break;
        }
        
        //unshift 함수는 배열을 한칸 오른쪽으로 밀고 0 번째 들어오는 숫자를 만들어줌
        arr.unshift(arr[arr.length - 1]);
        //pop() 배열의 마지막 요소를 제거
        arr.pop();
        
        cnt++;
        
        if(arr.join('') === B) {
            break;
        }else 
        
        //i가 A.length 만큼 반복해도 찾을 수 없다면 -1 리턴
        if(i === A.length - 1) {
            cnt = -1;
            break;
        }
  
    }
    
    return cnt;
}

module.exports = stringPush;
