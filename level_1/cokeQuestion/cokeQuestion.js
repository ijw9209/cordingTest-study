cokeQuestion = (a, b, n) => {
    var answer = 0;
    
    let lastBottle = 0;
    
    while(n >= a){
        lastBottle = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n += lastBottle;
        
    }
        
     
    
    return answer;
}
module.exports = cokeQuestion;
