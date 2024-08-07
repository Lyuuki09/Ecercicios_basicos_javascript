prompt = require("prompt-sync")();
let horas = prompt("insira a quantidade de horas trabalhadas na semana")
    let valor = prompt("insira o valor de cada hora trabalhada")
    let h = parseFloat(horas)
    let v = parseFloat(valor)

    let resposta = h * v


    console.log("o total a se receber no mes é de:"+ resposta * 4)