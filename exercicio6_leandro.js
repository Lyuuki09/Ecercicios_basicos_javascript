prompt = require("prompt-sync")();
let produto = prompt("Insira o nome do produto:")
    let valor = prompt("Insira o preço do produto:")
    let v1 = parseFloat(valor)
    let quantidade = prompt("insira a quantidade comprada:")
    let q = parseFloat(quantidade)
    let c = v1 * q
    let juros = prompt("Insira a porcentagem de desconto (digite apenas o valor)")
    let i = parseFloat(juros)
    
    let p = i / 100

    let r = c * p

    console.log("O valor de desconto no produto "+ produto +", na quantidade "+ q + " é de "+ r)