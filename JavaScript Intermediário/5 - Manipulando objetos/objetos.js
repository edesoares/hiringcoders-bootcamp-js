/*  Objetos são conjuntos com mapeamento de chaves e valores. Pra declarar
    um objeto atribuimos ele à uma variável usando '{}'. Os valores são 
    atribuidos com a sintaxe: "chave": valor , e separados por vírgula.
    Esse tipo de coleção de dados permite armazenar dados de tipos diferentes
    e acessá-los através da chave. */

var contatoShow = {
    nomeContato: "Lipe",
    ageContato: 15,
    mailContato: "lipi@mail.com"
}

//  Pra acessar usamos o nome do objeto "." e o nome da chave
console.log(contatoShow.nomeContato);

//  Também da pra acessar com '[]'
console.log(contatoShow['mailContato']);

//  Destructuring: podemos pegar um objeto e atribuir o valor contido em cada
//  chave à uma variável de uma vez 
const {nomeContato, ageContato, mailContato} = contatoShow;
console.log(`Nome: ${nomeContato}, Idade: ${ageContato} anos, Contato: ${mailContato}`);

//  Criando array de objetos: dentro do array, são declarados com '{}' e
//  separados por vírgula
var contatos = [
    {
        nome: "Lipe",
        age: 15,
        mail: "lipi@mail.com"
    },
    {
        nome: "Mariá",
        age: 5,
        mail: "maricota@mail.com"
    },
    {
        nome: "Lurdes",
        age: 6,
        mail: "lurdinha@mail.com"
    }
]

//  Essa estrutura de array de objetos é muito próxima da forma como as
//  informações são transportadas em arquivos JSON, portando quando se usa
//  JS pra consumir JSON, usamos essa estrutura pra lidar com as informações

//  Usando destructuring (só retorna os valores referente ao 1º objeto da lista,
//  como a aula não explica como recuperar e acessar os demais elementos através
//  do destructuring eu vou ter que pesquisar isso num momento oportuno)
const [{nome, age, mail}]  = contatos
console.log(nome)

//  Usando um map pra acessar valores por chave
contatos.map(contato => console.log(contato.nome));