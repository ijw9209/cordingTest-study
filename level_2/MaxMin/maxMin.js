maxMin = (s) => {
    const arr = s.split(" ");
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    let answer = min + " " + max;
    
    return answer;
}
module.exports = maxMin;
