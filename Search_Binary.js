//이진검색은 정렬된 배열을 받는다.
function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
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
