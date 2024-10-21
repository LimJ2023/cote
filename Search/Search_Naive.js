//나이브 탐색 알고리즘
//내가 만든 코드
function naiveSearch(long, pattern) {
  let count = 0;

  for (let i = 0; i > long.length; i++) {
    if (long[i] === pattern[0]) {
      //내부 루프로 확인
      for (let j = 1; j < pattern.length; j++) {
        if (pattern[j] !== long[i + j]) {
          count = -1;
          break;
        }
      }
      count += 1;
    }
  }
  return count;
}

//정리된 코드
function naive(long, short) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i], shrot[j]);
      if (short[j] !== long[i + j]) {
        console.log("break!");
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naive("lorie loled", "lol");
