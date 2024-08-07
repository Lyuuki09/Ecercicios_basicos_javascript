prompt = require("prompt-sync")();
let v1 = prompt("Por favor, insira um número:")
let num1 = parseFloat(v1)



if(num1 % 2 === 0){
    console.log("Seu número é par!")
}else{
    console.log("Seu número é impar!")
}