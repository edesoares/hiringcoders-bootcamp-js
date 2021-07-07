// Inverter strings

// Concatenação
function reverseString (input){
    var reversed = '';
    for (var i = input.length - 1; i >= 0; i--){
        vetor += input[i];
    }
    return reversed;
}

// Array e dois loops
function reverseLoop (input){
    vetor = [];
    for (var i = input.length - 1, j = 0; i >= 0; i--, j++){
        vetor[j] = input[i];
    }
    return vetor.join('');
}

// Função reverse
function reverseEasier (input){
    return input.split('').reverse().join('');
}

let resultado = reverseLoop("Socorram me subi no onibus em marrocos");
console.log(resultado);