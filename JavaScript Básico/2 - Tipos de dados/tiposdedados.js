/*  O javascript é uma linguagem dinamicamente tipada, ou seja, os tipos
    dos dados podem ser alterados conforme a necessidade do algoritmo   */

//  As variaveis assumem o tipo do dado que está sendo atribuido a ela

//  Nesse caso:

//  TIPOS PRIMITIVOS

//  String
var palavrinha = "Texto";

//  Number (tipo numerico)
var num = 42;

//  Number tbm podem ser tipos decimais
var pi = 3.14;

//  null (vazio, são consideradas com object)
var nada = null;

//  undefined (quando não é atribuido nem null)
var definicao;

//  boolean (true ou falso)
var vdd = true; 

//  TIPOS COMPOSTOS

// object - mapeia chaves e valores. declarados entre '{}' e os valores
// são atribuidos com ':'. A estrutura é: "chave": valor
var contato = {
    "name": "Lipe",
    "age": 15,
    "mail": "lipi@mail.com"
}

// arrays ou vetores. são coleção de dados de um mesmo tipo
// tbm são considerados object
var gatos = ["Laranjo", "Maricota", "Macaquinha", "Lurdes"]

// Function: é um objeto que pode ser chamado e executado
function soma(a, b){
    return a + b
}

// Identificando tipos de dados com o operador typeof

console.log(typeof palavrinha);
console.log(typeof num);
console.log(typeof pi);
console.log(typeof nada);
console.log(typeof definicao);
console.log(typeof vdd);
console.log(typeof contato);
console.log(typeof gatos);
console.log(typeof soma);