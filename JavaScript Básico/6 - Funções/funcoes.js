/*  Funções servem pra implementar uma lógica, as vezes recebendo parâmetros
    e também às vezes retornando valores. */

/*  Declarando uma função, se usa a palavra function, um nome atribuido a
    função depois abre e fecha '()' e depois entre '{}' fica o código que
    vai ser executado sempre que a função for chamada. */

function alo(){
    console.log("Alô");
}

alo(); //   chamada da função

/*  Pra usar valores externos pra serem trabalhados dentro da função,
    passamos esses valores como argumentos dentro dos '()'  */

function aloNome(nome){ // na declaração a gente indica que ela vai receber um parâmetro
    console.log("Alô, " + nome + "!");
}

//  O valor é passado na chamada da função
aloNome("Beto");

//  Função que retorna valores

function soma(num1, num2){
    return num1 + num2; //  usando a palavra return podemos retornar um valor
}                       //  nesse caso a soma

console.log(soma(5, 5));