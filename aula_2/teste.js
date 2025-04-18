const prompt = require('prompt-sync')();

let n1 = prompt('Digite o primeiro número: ');
let n2 = prompt('Digite o segundo número: ');

let soma = Number(n1) + Number(n2)
console.log(`O resultado é ${soma}`)