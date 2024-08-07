prompt = require("prompt-sync")();
let produto = prompt("insira o valor de seu produto:")
    let p = parseFloat(produto)
    let parcelas = prompt("insira o total de parcelas:")
    let pa = parseFloat(parcelas)
    let resposta = p / pa
    
    console.log("O valor a se pagar em cada parcela é de" + resposta)