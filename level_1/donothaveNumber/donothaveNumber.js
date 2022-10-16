donothaveNumber = (numbers) => {
    let sum = 0
    for(let i = 9; i >=0; i--){
        
        if(numbers.indexOf(i) === -1){
         sum += i;    
        }
        
    }
    return sum;
}
module.exports = donothaveNumber;
