//이진검색은 정렬된 배열을 받는다.

//내가 만들어본 코드
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(right / 2);
  while (left <= right) {
    //배열의 중간점 찾기
    if (val === arr[middle]) {
      return middle;
    } else if (val < arr[middle]) {
      right = middle - 1;
      middle = Math.floor((right + left) / 2);
    } else {
      left = middle + 1;
      middle = Math.floor((right + left) / 2);
    }
  }
  return -1;
}

//정리된 코드
function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] != elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
