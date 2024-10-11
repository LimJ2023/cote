// 배열과 값을 입력받아 목록에 있으면 인덱스를 반환하는 함수 작성
// indexOf도 같은 선형 검색 구조. O(n)
function linearSearch(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    if (val === arr[index]) return index;
  }
  return -1;
}
