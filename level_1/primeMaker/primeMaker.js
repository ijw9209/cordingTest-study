//소수만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/12977

function primeMaker(nums) {
    
    
  const arr = getCombinations(nums, 3);
  
  let sumArr = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
      console.log('i : ' + i);
      for(let j = 0; j < arr[i].length; j++) {
          
          sum += Number(arr[i][j]);
          
          if(j === arr[i].length - 1) {
              sumArr[i] = sum;
              sum = 0;
          }
      }
  }
  
  console.log(sumArr);
  
 
  
  //소수인지 판별
  
  let cnt = 0;
  for(let i = 0; i < sumArr.length; i++) {
      let b_Prime = isPrime(sumArr[i]);
      
      if(b_Prime === true) {
          cnt++;
      }
  }
  
  console.log(cnt);
  
  
  
  
  
  return cnt;
}

const getCombinations = function (arr, selectNumber) {
const results = [];
if (selectNumber === 1) return arr.map((value) => [value]); 
  // 1개씩 택할 때, 바로 모든 배열의 원소 return

arr.forEach((fixed, index, origin) => {
  const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
  const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
  const attached = combinations.map((combination) => {
      return [fixed, ...combination]}); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
  results.push(...attached); // 배열 spread syntax 로 모두 다 push
});

return results; // 결과가 담긴 results를 return
};

const isPrime = (n) => {
  if(n === 1) {
      return false;
  }
  for(let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0) return false;
  }
  
  return true;
  
}



module.exports = primeMaker;
