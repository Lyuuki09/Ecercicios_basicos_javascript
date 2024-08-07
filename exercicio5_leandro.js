prompt = require("prompt-sync")();
let produto = prompt("Insira o nome do produto:")
let valor = prompt("Insira o preço do produto:")
let v1 = parseFloat(valor)
let quantidade = prompt("insira a quantidade comprada:")
let q = parseFloat(quantidade)

let preco = v1 * q

let resposta = preco * 1.18

console.log("O valor de juros do produto"+ produto +", na quantidade"+ q + "é de"+ resposta)