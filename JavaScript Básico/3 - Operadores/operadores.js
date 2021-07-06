// Operadores

var num1 = 5;
var num2 = 2;

// OPERADORES ARITMETICOS
console.log("Operadores aritméticos")

// Adição
console.log(num1 + num2);

// Subtração
console.log(num1 - num2);

// Multiplicação
console.log(num1 * num2);

// Divisão
console.log(num1 / num2);

// Módulo (resto da divisão)
console.log(num1 % num2);

// Incremento
// Os sinais de incremento e decremento podem vir antes ou depois do numero

//  a diferença é que se vier depois ele imprime depois incrementa
console.log(num1++); // retorna 5
console.log(num1); // agora 6

// se vier antes ele incrementa e depois imprime
console.log(++num1); // retorna 7

// Decremento
console.log(num1--); // retorna 7
console.log(num1); // agora 6
console.log(--num1); // agora 5

// OPERADORES DE ATRIBUIÇÃO
console.log("Operadores de atribuição")

// Atribuição '='
num1 = 3;
console.log(num1); // retorna 3

// Atribuição com soma '+='
num1 += 3; 
console.log(num1); // retorna 6

// Atribuição com subtração '-='
num1 -= 3; 
console.log(num1); // retorna 3

// Atribuição com resto de divisão '%='
num1 %= 2; 
console.log(num1); // retorna 1

// Atribuição com divisão '/='
num1 /= 2; 
console.log(num1); // retorna 0.5

// OPERADORES DE COMPARAÇÃO
console.log("Operadores de comparação")

// Retornam valores boolean de acordo com o resultado da comparação
num1 = 2;
num2 = 2;

// Compara se valor é igual ao outro valor
console.log(num1 == num2); // retorna true

// Comparar valor e tipo são iguais
console.log(num1 === num2); // retorna true

// Compara se valor é diferente de
console.log(num1 != num2); // retorna false

// Compara se um valor é menor que o outro
console.log(num1 < num2); // retorna false

// Compara se um valor é menor ou igual ao outro
console.log(num1 <= num2); // retorna true

// Compara se um valor é maior que o outro
console.log(num1 > num2); // retorna false

// Compara se um valor é maior ou igual ao outro
console.log(num1 >= num2); // retorna true

// OPERADORES LÓGICOS
console.log("Operadores lógicos")

// Operadores lógicos são usados, por exemplo, pra validar
// mais de uma condição numa expressão.

// Operador "e": '&&'. 
// Tendo duas comparações, se uma e a outra forem verdadeiras
// ele retorna true. As duas devem ser true pra retornar true
console.log(num1 == 2 && num2 == num1); // retorna true

// Operador "ou": '||'
// Nesse caso se uma ou a outra comparação retornar true, ele
// retorna true. Basta uma delas ser true.
console.log(num1 != num2 || num1 > 0); // retorna true

// Operador "not": '1'
// Esse operador inverte o valor de uma comparação. Por exemplo,
// comparando dois valores iguais retornaria true. Mas se eu usar
// esse operador, ele só retorna true se a comparação for false
console.log(!num1 == num2); // Retorna false

// Pra saber mais sobre expressões com operadores lógicos e comparaticos
// tem esse artigo sobre a tabela verdade
// https://pt.wikipedia.org/wiki/Tabela-verdade