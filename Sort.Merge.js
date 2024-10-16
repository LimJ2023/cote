function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // 내가 한 코드
  //   for (k = 0; k < arr1.length + arr2.length; k++) {
  //     if (arr1[i] < arr2[j]) {
  //       result.push(arr1[i]);
  //       i++;
  //     } else {
  //       result.push(arr2[j]);
  //       j++;
  //     }
  //     if (i >= arr1.length) {
  //   if (j < i) {
  //     for (i; i < arr1.length; i++) {
  //       result.push(arr1[i]);
  //     }
  //   }

  //       break;
  //     } else if (j >= arr2.length) {
  //     for (j; j < arr2.length; j++) {
  //       result.push(arr2[j]);
  //     }
  //       break;
  //     }
  //   }
  return result;
}