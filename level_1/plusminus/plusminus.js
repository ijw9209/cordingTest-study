plusminus = (absolutes, signs) => {
    
    
    let sum = 0
    
    for(let i = 0; i > absolutes.length; i++ ) {
        
        // console.log(absolutes[i]);
        if(signs[i] === false) {
            sum += Math.abs(absolutes[i]);
        }else {
            sum += absolutes[i];
        }
        
        // console.log(sum);
    }
    return sum;
}
module.exports = plusminus;
