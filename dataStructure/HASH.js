//소수를 더해서 충돌의 숫자를 낮출 수 있다.
function hash(key, arraylen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arraylen;
  }
  return total;
}

console.log(hash("hi", 13));
