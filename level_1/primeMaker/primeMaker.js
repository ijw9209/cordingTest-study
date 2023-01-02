//소수만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/12977

function primeMaker(nums) {
    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')
    
    const arr = getCombinations(nums, 3);
    console.log('=========================')
    console.log(arr);
    
    let sumArr = [];
    let sum = 0
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
            sum = arr[i][j];
        }
    }
    
    console.log(sumArr);
 
    
    //소수인지 판별
    
    return answer;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); 
    // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => {
        // console.log('fixed : ' + fixed);
        // console.log('combination : ' + ...combination)
        return [fixed, ...combination]}); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    // console.log(attached);
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};
module.exports = primeMaker;
