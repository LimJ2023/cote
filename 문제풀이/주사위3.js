function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counter = new Map();
  let score = 0;

  dice.map((num) => {
    counter.set(num, (counter.get(num) || 0) + 1);
  });

  
  const keys = Array.from(counter.keys());
  const values = Array.from(counter.values());
  console.log("dice종류 : ", keys, " 카운트 : ", values);
  let p = 0,
    q = 0;
  // 주사위 1종류 일 때 (4개가 모두 같음)
  if (keys.length === 1) {
    p = keys[0];
    score += 1111 * p;
  }
  // 주사위 3종류 일 때 (2,1,1)
  else if (keys.length === 3) {
    let p, q, r;
    p = keys[values.findIndex((val) => val === 2)];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== p) {
        if (q === r) {
          q = keys[i];
        } else {
          r = keys[i];
        }
      }
    }

    console.log(p, q, r);
    score += q * r;
  }
  // 주사위 2종류일 때 (3,1)
  else if (keys.length === 2 && values.includes(3)) {
    if (values[0] === 3) {
      p = keys[0];
      q = keys[1];
      score += (10 * p + q) * (10 * p + q);
    } else if (values[0] === 1) {
      p = keys[1];
      q = keys[0];
      score += (10 * p + q) * (10 * p + q);
    }
  }
  //2종류 2,2 일 때
  else if (keys.length === 2 && values.includes(2)) {
    p = keys[0];
    q = keys[1];
    score += (p + q) * Math.abs(p - q);
  }
  //주사위가 모두 다를 경우
  else if (keys.length === 4) {
    let min = 6;
    for (let key of keys) {
      if (min > key) {
        min = key;
      }
    }
    score = min;
  }
  var answer = score;
  return answer;
}

console.log(solution(2, 5, 2, 6));
