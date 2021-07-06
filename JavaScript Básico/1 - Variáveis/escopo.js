// escopos

// eu posso criar um escopo só abrindo e fechando chaves
{
    var numero = 42;
    let outroNum = 55;

    console.log(outroNum); // isso só funciona dentro desse escopo
}

// Eu consigo chamar uma variavel var fora do escopo
console.log(numero);

// Eu n consigo chamar uma variável let
// console.log(outroNum);



// Hoisting (este exemplo está em https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting)

/*  Uma das vantagens do JavaScript em colocar declarações de função
    na memória antes de executar qualquer segmento de código é que ele
    permite que você use uma função através do hoisting antes de declara-la
    em seu código. Por exemplo: */

function catName(name) {
    console.log("O nome do meu gato é " + name);
}
      
catName("João");
      
//  O resultado do código acima é: "O nome do meu gato é João"

/*  O trecho de código acima é como você escreveria o código para que ele
    funcionasse. Agora, vamos ver o que acontece quando chamamos a função
     antes de escrevê-la: */

catName("Beto");

function catName(name) {
    console.log("O nome do meu gato é " + name);
}

//  O resultado do código acima é: "O nome do meu gato é Beto"

/*  Mesmo que chamemos a função em nosso código primeiro, antes que a função
    seja escrita, o código ainda funciona. Isto ocorre por conta de como a
    execução de contexto funciona em JavaScript.

    Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis
    podem ser inicializadas e usadas antes de serem declaradas. */ 

/*  O JavaScript apenas eleva (hoists) as declarações, não as inicializações.
    Se uma variável for declarada e inicializada após usá-la, o valor será
    undefined. Por exemplo: */

console.log(num); // Retorna undefined
var num;
num = 6;

/*  Se você declarar a variável depois que ela for usada, mas inicializá-la
    antecipadamente, ela retornará o valor: */

num = 6;
console.log(num); // retorna 6
var num;