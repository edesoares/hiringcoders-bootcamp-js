//  Output no js
console.log("Alou meu chapa");

// No js não precisa tipificar uma variável, ela assume o tipo
// de acordo com o valor inserido nela.

//  Declarando variável: se usa a palavra reservada var
var variavel

// No js o ';' é opcional mas é uma boa prática usar

//  Output com, a variável. Como não foi atribuído um valor, ele retorna
//  undefined
console.log(variavel);

//  Atribuindo um valor
variavel = "Roberto";

//  Concatenando saida
console.log("Alou " + variavel);

//  Uma boa prática é nomear variáveis usando o padrão camelCase

/*  De acordo com o es6 (ultima atualização do javascript de 2015)
    foram acrescentadas novas formas de declarar variáveis. */

// Há agora duas novas palavras reservadas para a criação de variáveis

// let
let palavra = "cacau";

// const - cria uma variável constante
const PI = 3.14;

/*  As diferenças entre essas formas de se declarar variáveis são de escopo
    de maleabilidade das variáveis.  */

    // var são declaradas com escopo global ou escopo de funções

    // let e const são escopos bloqueados

    // var podem ser atualizadas ou reatribuidas

    // let só pode ser atualizada

    // const não pode ser atualizada nem reatribuida e deve ser inicializada no
    // momento da declaração