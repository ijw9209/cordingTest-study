// 2018 KAKAO BLIND RECRUITMENT
// [1차] 비밀지도

// https://school.programmers.co.kr/learn/courses/30/lessons/17681


secretMap = (n, arr1, arr2) => {
    var answer = [];
    
    for(let i = 0; i < n; i++){
        // 2진법 변환
        let add = Number(arr1[i].toString(2)) + Number(arr2[i].toString(2));
        //  앞의 0 이 없으면 붙임 , 0 -> ' ' 공백 치환 , [1-9] 숫자라면 #으로 치환
        answer[i] = String(add).padStart(n, '0').replaceAll(0, ' ').replaceAll(/[1-9]/g,'#');
    }
    return answer;
}
module.exports = secretMap;


//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

