/*  Estruturas condicionais servem pra fazermos o controle do
    fluxo de execução de um programa utilizando condições. Para
    isso, utilizamos os operadores lógicos e de comparação. */

/*  Estrutura if: Nos possibilita que, diante de uma condição,
    possamos direcionar o que será executado de acordo com cada
    possível resultado dessa condição. */

var num = 5;

if (num > 5){
    console.log("num é maior que 5")
} else {
    console.log("num é menor ou igual a 5")
}

/*  Esse código retorna "num é menor ou igual a 5". A estrutura do
    if else é: SE condição for verdadeira FAÇA isso, SENÃO, FAÇA aquilo. */

// Também da pra emendar um else com outro if colocando outra condição:

var num2 = 6;

if (num2 > 5){
    console.log("num2 é maior que 5")
} else if(num2 < 5) {
    console.log("num2 é menor que 5")
} else {
    console.log("num2 é igual a 5")
}

/*  Switch case é uma estrutura parecida. Aqui são verificados casos
    possíveis se uma condição for obedecida. Precisa usar um break no
    fim de cada caso pra saír da estrutura quando a condição for atendida. */

var mes = 1;
switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Já deu pra pegar a ideia");
        break;
    default:
        console.log("Ops");
}

// O default é o que aparece se nenhum caso satisfazer a condição.