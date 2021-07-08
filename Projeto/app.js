//  Importa os dados de database.js
const livros = require('./database');

//  'Instancia' o readline pra entrada do usuário
const readline = require('readline-sync');

//  Entrada inicial
const resp1 = readline.question("Buscar um livro: (s/n) ");

//  Verificar entrada
if (resp1.toLocaleUpperCase() === 'S'){
    console.log("Categorias disponíveis:\n");
    console.log(...new Set(livros.map(livro => livro.categoria+'/')));

    // Perguntar qual categoria
    const resp2 = readline.question("Qual categoria? ");
    const retorno = livros.filter(livro => livro.categoria === resp2);

    console.table(retorno);
} else {
    const ordenados = livros.sort((a,b)=>a.paginas - b.paginas);
    console.log("Estes são todos os livros disponíveis:");
    console.table(ordenados);
}