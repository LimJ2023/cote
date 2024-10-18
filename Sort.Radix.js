function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

//수 목록을 받는 함수 정의(기수정렬)
// 가장 큰수가 몇인지 알아내고 루프 시작. 0~큰자릿수
// 각 자릿수에 버킷(빈배열) 만들기. 기존 배열을 버킷의 값으로 바꿈.

//내가 한 코드..
function myradixSort(nums) {
  let mostDigit = mostDigits(nums);
  const result = [];
  for (let i = 0; i < mostDigit; i++) {
    const arr = result;
    for (j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      arr[digit] = nums[j];
    }
    result.push(arr);
  }
  return result;
}
myradixSort([123, 22, 5869, 4435, 9868]);
