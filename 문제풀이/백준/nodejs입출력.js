//한 줄 입력
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

function lines() {
  //여러 줄 입력

  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let count = input[0];
  let numbers = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== "") {
      numbers.push(input[i].split(" "));
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);

    console.log(num1 + num2);
  }
}
