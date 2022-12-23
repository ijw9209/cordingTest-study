//3진법 뒤집기


smallSizeString = (t, p) => {
     var answer = 0;
    
     let pLen = p.length;
     
     let temp = "";
     for(let i = 0; i < t.length; i++) {
         temp = t.slice(i, i + pLen);
         if(temp.length >= pLen) {
             if(Number(temp) <= Number(p)){
                 console.log(temp);
                 answer++;
             }
         }
     }
     return answer;
}
module.exports = smallSizeString;


//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

