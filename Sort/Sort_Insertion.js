//두번째 값을 취해서 앞에 있는 값과 비교한다.
// 필요하다면 스왑. 그런다음 옆에있는 요소와 비교하여 반복.
// 배열을 정렬할 때까지 반복하고 배열 반환.

//내가만든 코드
function insertionSort(arr) {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        swap(arr, i - 1, j);
      }
    }
  }
  return arr;
}

//정리된 코드
function insertionSrot2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j = i - 1;
    for (let k = j; k >= 0 && arr[k] > curVal; k--) {
      arr[k + 1] = arr[k];
    }
    arr[j + 1] = curVal;
  }
  return arr;
}

insertionSrot2([2, 1, 9, 76, 4]);
