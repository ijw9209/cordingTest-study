//가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086
nearString = (s) => {
    var answer = [];
    
    let str = "";
    
    for(let i = 0; i < s.length; i++) {
        
        console.log(i - str.indexOf(s[i]));
        if(str.lastIndexOf(s[i]) === -1) {
            answer[i] = -1;
        }else {
            answer[i] = i - str.lastIndexOf(s[i]);
        }
        str += s[i];
    }
    return answer;
}
module.exports = nearString;

