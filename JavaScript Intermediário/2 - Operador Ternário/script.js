//  Operador ternário é uma forma simplificada de escrever expressões
//  condicionais

//  Então o que vc faria com um if:
var num = 6;
if(num > 5){
    console.log("maior que 5");
} else {
    console.log("menor ou igual a 5");
}

// Vc pode simplificar com:
console.log(num > 5 ? "maior que 5": "menor ou igual a 5");

/*  A sintaxe da expressão é: [condição] ? [caso true] : [caso false]
    Você pode atribuir a uma variável, usar no retorno de uma função, 
    implementar num output igual eu fiz etc. */