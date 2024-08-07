prompt = require("prompt-sync")();
let v1 = prompt("Digite o primeiro valor:")
    let num1 = parseFloat(v1)

    let v2 = prompt("Digite o segundo número")
    let num2 = parseFloat(v2)

    let resposta = v1 - v2

    console.log("Seu resultado é:"+  resposta)