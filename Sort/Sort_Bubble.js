//내가 만든 코드

function swap(arr, num1, num2) {
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
      }
    }
  }
  return arr;
}

//정리된 코드
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//최적화 코드
function bubbleSort3(arr) {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
