phoneketmon = (nums) => {
    
    var answer = 0;
    
    let select = nums.length / 2;
    
    const set = new Set(nums);
    
    const uniqueArr = [...set];
    
    console.log(uniqueArr);

    answer = uniqueArr.length < select ? uniqueArr.length : select
    
    return answer;
}
module.exports = phoneketmon;
