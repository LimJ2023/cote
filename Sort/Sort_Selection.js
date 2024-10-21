//내가 만든 코드
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //첫번째 바퀴. 0에서 출발
    let first = i;
    let sel = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[first] > arr[j] && arr[sel] > arr[j]) {
        sel = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[sel];
    arr[sel] = temp;
  }
  return arr;
}

//정리된 코드
function selectSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
