prompt = require("prompt-sync")();
let celsius = prompt("digite a temperatura me celsius")
let c = parseFloat(celsius)

let resposta = c * 9/5 + 32


console.log("Sua temperatura em Fahrenheit vale:" + resposta)