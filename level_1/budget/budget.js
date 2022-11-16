budget = (d, budget) => {
    let cnt = 0;
    
    d.sort((a, b) => a - b)
    
    let sum = 0;
    for(let i = 0; i < d.length; i++){
        
        sum += d[i];
        if(sum <= budget) {
            cnt += 1;
        }else {
            break;
        }
    }
    return cnt;
}
module.exports = budget;
