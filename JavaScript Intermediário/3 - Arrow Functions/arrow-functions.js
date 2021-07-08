/*  Arrow functions costumam ser usadas com funções anômimas ou funções callback,
    que são passadas como parâmetros de outras funções */

//  Função normal
function somaFunction (a, b){
    return a + b;
}
console.log(somaFunction(3, 5));

//  Arrow function
var somaArrow = (a, b) => a + b;//  Nesse caso a funcão é atribuída à variável
console.log(somaArrow(3, 5))    //  'somaArrow'. A seta '=>' indica o retorno da
                                //  função e os parâmetros vão dentro de '()'

//  Se a função tiver mais linhas de código eu posso abrir um escopo na frente
//  com '{}' na frente da seta. Nesse caso eu preciso usar o 'return'
var somaArrowComEscopo = (a, b) => {
    return a + b
}
console.log(somaArrowComEscopo(3, 5))

// Se eu tiver só um parâmetro eu posso tirar os '()'