function pivotHelper(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;
  const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  };
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
//내가 만든 퀵소트
function mypivotHelper(arr) {
  let pibotPoint = 0;
  let pibotIndex = 0;
  const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pibotPoint]) {
      lessIndex = i;
      pibotIndex++;
      swap(arr, i, pibotPoint + pibotIndex);
    }
  }
  swap(arr, pibotPoint, pibotPoint + pibotIndex);
  return arr;
}

mypibotHelper([4, 5, 3, 2, 1]);
