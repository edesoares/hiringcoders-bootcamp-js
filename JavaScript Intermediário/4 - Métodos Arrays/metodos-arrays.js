//  Arrays - arrays são coleções de dados de um mesmo tipo

//  Declarando um array: Pra declarar um array vazio é só deixar o [] vazio
var gatineos = ["Maricota", "Laranjo", "Lurdinha", "Macaquinha"];

//  Acessando um elemento: Acessa pelo índice (o primeiro é sempre 0)
console.log(gatineos[0]);

//  Operador spread '...' : serve pra copiar elementos de um array para outro
//  Basta colocar '...' seguido do nome do array a ser copiado. Exemplo: 
var bichos = [...gatineos, "Lipe", "Bibi", "João"];
console.log(bichos);

//  Métodos de iteração

//  Método for
console.log("\nMétodo for");
for (var i = 0; i < bichos.length; i++){
    console.log(bichos[i]); //  Como os índices do array são identificados
}                           //  com numeros, isso permite iterar pelos elementos

//  Método for each
console.log("\nMétodo for each");
for (bicho of bichos){  //  Vou chamar cada elemento de bicho referente (of) ao
    console.log(bicho); //  array 'bichos'. Ao invés de eu chamar pelo índice, eu
}                       //  chamo pelo apelido 'bicho'.

//  Método map
console.log("\nMétodo map");
bichos.map(bicho => console.log(bicho));

//  Método Filter: possibilita filtrar elementos do array
var numeros = [8, 2, 9, 6, 3, 4, 7, 1, 5];
//  Supondo que eu queira criar um array com numeros ímpares
var pares = numeros.filter(numero => numero % 2 == 0)
console.log(pares)

//  Método find: procura um elemento em um array
const gatoPreto = bichos.find(bicho => bicho === "Maricota");
console.log(gatoPreto);

//  Método Sort: ordena os elementos de um array
console.log(numeros.sort()) //              Ordem crescente
console.log(numeros.sort((a,b) => b-a))//   Ordem decrescente

//  Método Reduce: Reduz o array a um resultado de um operação matemática
const numbers = [1,34,35]
//  Aqui ele basicamente itera de dois em dois somando os valores
const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
},100)//    Eu posso somar mais um valor aqui no final, passando como parâmetro
//          de reduce()
console.log(soma)


// Eu posso usar por exemplo pra retornar o maior valor do array
const moreNumbers = [14, 35, 88, 27, 12, 42]

const maior = moreNumbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior > valorAtual ? valorAnterior : valorAtual;
})
console.log(maior);