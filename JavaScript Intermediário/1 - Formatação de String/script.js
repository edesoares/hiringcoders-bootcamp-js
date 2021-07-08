/*  Pra fazer algo equivalente ao printf do Java ou o print(f'') do Python,
    no JS, ou seja, formatar um output pra incluir variáveis sem precisar
    concatenar com '+', se usa o sinal '`' (crase) pra envolver o conteúdo
    da saída e coloca-se as variáveis dentro de '${}' */

//  Exemplo:

var nome = "Hepaminondas";
var dia = 8;

console.log(`Alou ${nome}! Hoje é dia ${dia}`);