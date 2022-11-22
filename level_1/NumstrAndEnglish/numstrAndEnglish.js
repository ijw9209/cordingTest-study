// 숫자 문자열과 영단어

// https://school.programmers.co.kr/learn/courses/30/lessons/81301

numstrAndEnglish = (s) => {
    const data = ['zero', 'one', 'two' , 'three' , 'four', 'five', 'six', 'seven' , 'eight' ,'nine'];
    
    let temp = '';
    let s_num = '';
    
    for(let i = 0; i < s.length; i++) {
        
        if(!isNaN(s[i])) {
            temp = '';
            s_num += s[i];
        }else {
            temp += s[i];
            
            if(data.indexOf(temp) !== -1) {
                s_num += data.indexOf(temp);
                temp = '';
            }
        }
    }
    
    return Number(s_num);
}

module.exports = numstrAndEnglish;

