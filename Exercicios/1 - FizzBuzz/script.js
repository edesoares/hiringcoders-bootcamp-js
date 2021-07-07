/*  FizzBuzz

    Se for divisível por 3 retorna "Fizz",
    se for divisível por 5 retorna "Buzz",
    se for divisível por 3 e 5 retorna "FizzBuzz"
    se não for um numero retorna "Não é um numero",
    Se não for divisível nem por 3, nem por 5, pede
    outra entrada.

*/

let resultado = fizzBuzz(2);
console.log(resultado);

function fizzBuzz(entrada){
    if (entrada % 3 === 0 && entrada % 5 === 0){
        return "FizzBuzz";
    } else if (entrada % 3 === 0){
        return "Fizz";
    } else if (entrada % 5 === 0){
        return "Buzz";
    } else if (typeof entrada !== "number") {
        return "Não é um numero";
    } else {
        return entrada;
    }
}