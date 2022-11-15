//3진법 뒤집기


ternaryReverse = (n) => {
     //10진법 -> 3진법 변환
     let ternary = n.toString(3);
    
     //3진법 뒤집기
     let revTernary = ternary.split('').reverse().join('');
     
     //3진법 -> 10진법
     let decimal = parseInt(revTernary, 3);
     
     
     
     return decimal;
}
module.exports = ternaryReverse;


//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

