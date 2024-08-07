prompt = require("prompt-sync")();
let idade = prompt("Por favor, Digite o ano de seu nascimento:");
let i = parseInt(idade);
let hoje = new Date();
let data = hoje.getFullYear();
let resultado = data - i;

if(i < 1899){
    console.log("Data inválida, tente novamete")
}else{
    console.log("Sua idade é:"+ resultado);
}