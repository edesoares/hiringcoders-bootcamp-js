/*  Estruturas de repetição são utilizadas pra repetir um bloco de código
    de acordo com uma condição. */

/*  Estrutura for: repete o código até que uma condição seja atendida. 
    Geralmente é feito algum controle pra garantir que não vai repetir
    pra sempre. Muito útil pra iterar em arrays. */

//  Aqui o 'i' é o contador que vai fazer o controle. Ele começa com 0,
//  e incrementa 1 enquanto 'i' for menor que 5.
for (var i = 0; i < 5; i++){
    console.log(i); // Enquando estiver incrementando ele vai imprimir o valor de 'i'
}

var palavras = ["Palavra", "Azul", "Cachorro", "Veículo", "Nuvens"];

//  Iterando arrays

for (var i = 0; i < 5; i++){
    console.log(palavras[i]);   // Como os índices do array são identificados
                                // com numeros, isso permite iterar pelos elementos
}

//  Um jeito melhor de fazer isso é passando o tamanho do array no lugar de 5
for (var i = 0; i < palavras.length; i++){
    console.log(palavras[i]);   // Como os índices do array são identificados
                                // com numeros, isso permite iterar pelos elementos
}

/*  Estrutura while e do while: Ele excuta um bloco de código enquando uma
    condição for verdadeira */

//  O while executa o código depois da verificação
var i = 0;
while (i < 10){
    console.log(i);
    i++;    // Fiz um incremento pra não repetir infinitamente
}

//  O do while executa e depois verifica. O código é executado pelo
//  menos uma vez antes de verificar a condição
i = 10;
do {
    console.log(i);
    i++;
} while (i < 10);