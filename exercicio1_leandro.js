prompt = require("prompt-sync")();
let v1 = prompt("insira um número")
let num1 = parseFloat(v1)

let v2 = prompt("insira outro número")
let num2 = parseFloat(v2)

let soma = num1 + num2

console.log("O resultado de sua soma é:" + soma)