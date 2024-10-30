let fs = require("fs");
let input = fs.readFileSync("./입력.txt").toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let result = num1 / num2;

console.log(result);
