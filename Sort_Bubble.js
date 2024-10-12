//내가 만든 코드
function bubbleSort(arr) {
  function swap(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //리턴을 어떻게 받을지 생각못함 그냥 스왑코드를 쓰는게 나았을듯
        swap(arr[j], arr[j + 1]);
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
    noswaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noswaps) break;
  }
  return arr;
}
