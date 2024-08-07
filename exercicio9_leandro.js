prompt = require("prompt-sync")();

let compra = parseFloat(prompt("insira o valor da compra"))
let parcelas = parseFloat(prompt("insira a quantidade de parcelas"))
let juros = parseFloat(prompt("inrisa a porcentagem de juros compostos"))

let precoparcela = compra/parcelas
let jur = juros/100
let total = 0
console.log("[---------------------------------]")
console.log("O valor da compra: "+ compra)
console.log("Número de parcelas: "+ parcelas)
console.log("Com essa porcentagem de juros "+jur+"%")
for (let i = 1; i <= parcelas ; i++){
    precoparcela = precoparcela * (1 + jur)
console.log("a parcela "+i+" vale R$ "+ precoparcela)
total = total + precoparcela
}
console.log("o valor total é de: "+ total)
console.log("[---------------------------------]")