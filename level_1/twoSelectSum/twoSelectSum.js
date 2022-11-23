//두 개 뽑아서 더하기

//https://school.programmers.co.kr/learn/courses/30/lessons/68644


twoSelectSum = (numbers) => {
     let idx = 0;
    const sumArr = [];
    
    
    for(let i =0; i < numbers.length; i++) {
        
        for(let j = i + 1; j < numbers.length; j++) {
            // console.log(numbers[i] , numbers[j])
            
            sumArr[idx] = numbers[i] + numbers[j];
            idx++;
            
        }
    }
    
    //정렬
    sumArr.sort(function(a, b) {
        return a - b;
    })
    
    //중복제거
    return [...new Set(sumArr)];
}
module.exports = twoSelectSum;



