//특정 문자 제거하기 
//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

specificStrRemove = (my_string, letter) => {

    var answer = '';
    
    answer = my_string.replaceAll(letter, "");
    
    return answer;
}
module.exports = specificStrRemove;
