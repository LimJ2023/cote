const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const times = input[0];

for (let i = 1; i <= times; i++) {
  const result = parenthesisString(input[i]);
  console.log(result);
}
function parenthesisString(str) {
  const stack = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.pop() !== "(") {
        return "NO";
      }
    }
  }
  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
