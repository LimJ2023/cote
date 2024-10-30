const fs = require("fs");
const input = fs.readFileSync("입력.txt").toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
console.log(
  `${add(num1, num2)}\n${sub(num1, num2)}\n${mul(num1, num2)}\n${Math.floor(
    div(num1, num2)
  )}\n${mod(num1, num2)}`
);
